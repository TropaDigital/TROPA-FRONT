import { TrashIcon } from '@/src/assets/icons';
import { useDeleteImage } from '@/src/services/image/DELETE';
import { useCreateRecipe } from '@/src/services/receitas/POST';
import { useUpdateRecipe } from '@/src/services/receitas/PUT';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import Inputdefault from '../../inputs/InputDefault';
import InputDescription from '../../inputs/InputDescription';
import InputImage from '../../inputs/InputImage';
import InputQuantity from '../../inputs/InputQuantity';
import InputSelect from '../../inputs/InputSelect';
import * as S from '../styles';
import { IActualItemRecipe, IInitialValuesRecipe, IRecipe } from '../types';
import { Formik, Form } from 'formik';
import { formRecipeSchema } from '../yupSchemas';

interface IFormRecipe {
  modalOpen?: string;
  actualItem?: IActualItemRecipe | any;
  onSubmit: () => void;
}

const FormRecipe = ({ modalOpen, actualItem, onSubmit }: IFormRecipe) => {
  const [image, setImage] = useState<string[]>();
  const [imagesIdToRemove, setImagesIdToRemove] = useState<string[]>([]);

  const { deleteImage } = useDeleteImage('Receita');

  const actualItemImages: string[] = actualItem?.produtoImagens?.map(
    (objImage: any) => {
      return objImage?.url_imagem;
    }
  );

  useEffect(() => {
    if (actualItem) {
      setImage(actualItemImages);
      handleOnChangeDTO('imagem', actualItemImages);
    }
  }, [actualItem]);

  const [DTO, setDTO] = useState<{ valor: number; imagem: string[] }>({
    valor: 0,
    imagem: [],
  });

  function handleOnChangeDTO(
    key: 'valor' | 'imagem',
    value: string | Array<string>
  ) {
    let newDTO: any = DTO;
    newDTO[key] = value;
    setDTO({ ...newDTO });
  }

  const { postRecipe } = useCreateRecipe();
  const { updateRecipe } = useUpdateRecipe();

  const createRecipe = (data: IRecipe | any) => {
    const post = {
      titulo: data?.titulo,
      tempo_preparo: data?.tempo + 'min',
      resumo: data?.resumo,
      dificuldade: data?.dificuldade,
      qtd_porcao: data?.porcao,
      ingredientes: data?.ingredientes
        .replaceAll(';', '')
        .replace(/(\r\n|\n|\r)/gm, ';'),
      slug: data?.slug,
      modo_preparo: data?.preparo,
      imagem: image,
    };

    postRecipe(post);
    onSubmit();
  };

  const updateARecipe = (data: IRecipe | any) => {
    imagesIdToRemove?.map((imageId) => {
      deleteImage(imageId ? imageId : '');
    });

    const post = {
      recipe: {
        titulo: data?.titulo,
        tempo_preparo: data?.tempo + "min",
        dificuldade: data?.dificuldade,
        resumo: data?.resumo,
        qtd_porcao: data?.porcao,
        ingredientes: data?.ingredientes,
        modo_preparo: data?.preparo,
        slug: data?.slug ? data?.slug : actualItem?.slug,
        imagem: image,
      },
      id: actualItem?.id_receita,
    };

    updateRecipe(post);
    onSubmit();
  };

  const removeImage = (actualImage: string, images: string[]) => {
    const arrayFilteredImages = images?.filter((image) => {
      return image !== actualImage;
    });

    actualItem?.produtoImagens?.map((image: any) => {
      if (actualImage === image?.url_imagem) {
        setImagesIdToRemove([
          ...imagesIdToRemove,
          String(image?.id_receita_imagem),
        ]);
      }
    });

    setImage(arrayFilteredImages);
    handleOnChangeDTO('imagem', arrayFilteredImages);
  };

  const createSlug = (titulo: string) => {
    return titulo
      ?.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      ?.replaceAll(' ', '-')
      ?.toLowerCase();
  };

  const actualItemIngredientes = actualItem?.ingredientes?.replaceAll(
    ';',
    '\n'
  );

  return (
    <Formik
      initialValues={{
        images: actualItemImages ? actualItemImages : [],
        titulo: actualItem?.titulo ? actualItem?.titulo : '',
        porcao: actualItem?.qtd_porcao ? actualItem?.qtd_porcao : '',
        tempo: actualItem?.tempo_preparo ? actualItem?.tempo_preparo?.replaceAll("min", "") : '',
        resumo: actualItem?.resumo ? actualItem?.resumo : '',
        preparo: actualItem?.modo_preparo ? actualItem?.modo_preparo : '',
        ingredientes: actualItemIngredientes ? actualItemIngredientes : '',
        dificuldade: actualItem?.dificuldade ? actualItem?.dificuldade : '',
        status: actualItem?.status ? actualItem?.status : '',
        slug: actualItem?.slug ? actualItem?.slug : '',
      }}
      validationSchema={formRecipeSchema}
      onSubmit={(values: IInitialValuesRecipe) => {
        if (modalOpen === 'publicar') {
          createRecipe(values);
        } else {
          updateARecipe(values);
        }
      }}
    >
      {(props) => (
        <>
          <S.Container>
            <Form
              onSubmit={props.handleSubmit}
              className="formAddProductWrapper"
            >
              <InputImage
                onPostImage={(image: string) => {
                  const newArrayImagesProduct: Array<string> = DTO?.imagem;
                  newArrayImagesProduct.push(image);
                  handleOnChangeDTO('imagem', newArrayImagesProduct);
                  setImage(newArrayImagesProduct);
                  {
                    props?.setFieldValue('images', newArrayImagesProduct);
                  }
                }}
                error={props?.touched?.images ? props?.errors?.images : null}
              />
              <div className="imageComponentWrapper">
                {DTO?.imagem?.map((row: string, key: number) => (
                  <span className="imageComponent">
                    <div className="removeImage">
                      <div
                        className="removeIcon"
                        onClick={() => {
                          removeImage(row, DTO?.imagem);
                          props?.setFieldValue('images', DTO?.imagem);
                        }}
                      >
                        <TrashIcon size={42} />
                      </div>
                    </div>
                    <Image
                      className="nextImage"
                      src={row}
                      alt="Imagem de upload"
                      key={key}
                      width={80}
                      height={80}
                    />
                  </span>
                ))}
              </div>
              <div className="inputsProductWrapper">
                <div className="lineElementsWrapper">
                  <Inputdefault
                    placeholder="Digite o nome da receita..."
                    label="Nome da Receita"
                    name="titulo"
                    onChange={(e: any) => {
                      props?.handleChange(e);
                      props?.setFieldValue(
                        'slug',
                        createSlug(e?.target?.value)
                      );
                    }}
                    value={props?.values?.titulo}
                    error={props?.touched?.titulo ? props?.errors?.titulo : null}
                  />
                  <InputQuantity
                    label="Porção"
                    min="0"
                    max="99"
                    name="porcao"
                    value={props?.values?.porcao}
                    onChange={props?.handleChange}
                    error={props?.touched?.porcao ? props?.errors?.porcao : null}
                  />
                  <InputQuantity
                    label="Tempo"
                    min="0"
                    max="400"
                    name="tempo"
                    onChange={props?.handleChange}
                    value={props?.values?.tempo}
                    tooltip={'O tempo deve estar em minutos'}
                    error={props?.touched?.tempo ? props?.errors?.tempo : null}
                  />
                </div>
                <InputDescription
                  label="Resumo"
                  placeholder="Breve resumo da receita"
                  name="resumo"
                  onChange={props?.handleChange}
                  value={props?.values?.resumo}
                  tooltip={'Resumo deve ter no minímo 10 caracteres'}
                  error={props?.touched?.resumo ? props?.errors?.resumo : null}
                />
                <InputDescription
                  label="Modo de preparo"
                  placeholder="Escreva como preparar a receita"
                  name="preparo"
                  onChange={props?.handleChange}
                  value={props?.values?.preparo}
                  tooltip={'Resumo deve ter no minímo 10 caracteres'}
                  error={props?.touched?.preparo ? props?.errors?.preparo : null}
                />
                <InputDescription
                  label="Ingredientes"
                  placeholder="Escreva os ingredientes da receita"
                  name="ingredientes"
                  onChange={props?.handleChange}
                  value={props?.values?.ingredientes}
                  tooltip={'Resumo deve ter no minímo 10 caracteres'}
                  error={props?.touched?.ingredientes ? props?.errors?.ingredientes : null}
                />
                <div className="lineElementsWrapper">
                  <InputSelect
                    label="Dificuldade"
                    options={['Fácil', 'Médio', 'Difícil']}
                    name="dificuldade"
                    onChange={props?.handleChange}
                    values={props?.values?.dificuldade}
                    error={props?.touched?.dificuldade ? props?.errors?.dificuldade : null}
                    maxWidth={130}

                  />
                  <InputSelect
                    label="Status"
                    options={['Ativo', 'Inativo']}
                    name="status"
                    onChange={props?.handleChange}
                    value={props?.values?.status}
                    error={props?.touched?.status ? props?.errors?.status : null}
                    maxWidth={130}
                  />
                </div>

                <div className="lineElementsWrapper buttonsWrapper">
                  <ButtonDefault
                    color="transparent"
                    type="button"
                    onClick={() => onSubmit()}
                    className="button"
                  >
                    Cancelar
                  </ButtonDefault>
                  <ButtonDefault
                    color="ligthYellow"
                    className="button"
                    type="submit"
                  >
                    {modalOpen === 'publicar' ? 'Publicar' : 'Atualizar'}
                  </ButtonDefault>
                </div>
              </div>
            </Form>
          </S.Container>
        </>
      )}
    </Formik>
  );
};

export default FormRecipe;