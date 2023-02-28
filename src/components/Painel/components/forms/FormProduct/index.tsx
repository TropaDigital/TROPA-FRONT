import Image from 'next/image';
import { useEffect, useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import Inputdefault from '../../inputs/InputDefault';
import InputDescription from '../../inputs/InputDescription';
import InputImage from '../../inputs/InputImage';
import InputQuantity from '../../inputs/InputQuantity';
import InputSelect from '../../inputs/InputSelect';
import * as S from '../styles';
import { useCreateProduct } from '@/src/services/products/POST';
import { useUpdateProduct } from '@/src/services/products/PUT';
import { IActualItemProduct, IInitialValuesProduct, IProduct } from '../types';
import { TrashIcon } from '@/src/assets/icons';
import { useDeleteImage } from '@/src/services/image/DELETE';
import { Formik, Form } from 'formik';
import { formProductsSchema } from '../yupSchemas';

interface IFormProduct {
  modalOpen: string;
  actualItem?: IActualItemProduct | any;
  onSubmit: () => void;
}

const FormProduct = ({ modalOpen, actualItem, onSubmit }: IFormProduct) => {
  const [image, setImage] = useState<string[]>();
  const [imagesIdToRemove, setImagesIdToRemove] = useState<string[]>([]);
  const [price, setPrice] = useState<string>('');

  const actualItemImages = actualItem?.produtoImagens?.map((objImage: any) => {
    return objImage?.url_imagem;
  });

  useEffect(() => {
    if (actualItem) {
      setPrice(formatPrice(actualItem?.valor));
      setImage(actualItemImages);
      handleOnChangeDTO('imagem', actualItemImages);
    }
  }, [actualItem]);

  const { deleteImage } = useDeleteImage('Produto');

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

  const { postProduct } = useCreateProduct();
  const { updateProduct } = useUpdateProduct();

  const createProduct = (data: IProduct | any) => {
    const product = {
      titulo: data?.titulo,
      valor: data?.preco,
      descricao: data?.resumo,
      peso: data?.peso + 'g',
      slug: data?.slug,
      imagem: image,
    };

    postProduct(product);
    onSubmit();
  };

  const updateAProduct = (data: IProduct | any) => {
    imagesIdToRemove?.map((imageId) => {
      deleteImage(imageId ? imageId : '');
    });

    const post = {
      product: {
        titulo: data?.titulo ? data?.titulo : actualItem?.titulo,
        valor: data?.preco ? data?.preco : actualItem?.valor,
        descricao: data?.resumo ? data?.resumo : actualItem?.descricao,
        peso: data?.peso + 'g' ? data?.peso + 'g' : actualItem?.peso,
        slug: data?.slug ? data?.slug : actualItem?.slug,
        imagem: image ? image : actualItemImages,
      },
      id: actualItem?.id_produto,
    };

    updateProduct(post);
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
          String(image?.id_produto_imagem),
        ]);
      }
    });

    if (arrayFilteredImages) {
      setImage(arrayFilteredImages);
    }
    handleOnChangeDTO('imagem', arrayFilteredImages);
  };

  const createSlug = (titulo: string) => {
    return titulo?.toLowerCase()?.replaceAll(' ', '-');
  };

  const formatPrice = (price: any) => {
    let value = price?.replace(/[\W\D]/g, '');
    value = (value / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return value;
  };

  const handlePrice = (e: any) => {
    setPrice(formatPrice(e.target.value));
  };

  return (
    <S.Container>
      <Formik
        initialValues={{
          images: actualItemImages ? actualItemImages : [],
          titulo: actualItem?.titulo ? actualItem?.titulo : '',
          preco: actualItem?.valor ? actualItem?.valor : '',
          resumo: actualItem?.descricao ? actualItem?.descricao : '',
          peso: actualItem?.peso ? actualItem?.peso?.replace('g', '') : '',
          status: actualItem?.status ? actualItem?.status : '',
          slug: actualItem?.slug ? actualItem?.slug : '',
        }}
        validationSchema={formProductsSchema}
        onSubmit={(values: IInitialValuesProduct) => {
          if (modalOpen === 'publicar') {
            createProduct(values);
          } else {
            updateAProduct(values);
          }
        }}
      >
        {(props) => (
          <>
            <Form
              onSubmit={props.handleSubmit}
              className="formAddProductWrapper"
            >
              <InputImage
                onPostImage={(image: string) => {
                  let newArrayImagesProduct: Array<string> = DTO?.imagem;
                  newArrayImagesProduct?.push(image);
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
                    label="Título"
                    placeholder="Título do produto"
                    name="titulo"
                    value={props?.values?.titulo}
                    onChange={(e: any) => {
                      props?.handleChange(e);
                      props?.setFieldValue('slug', createSlug(e.target.value));
                    }}
                    error={props?.touched?.titulo ? props?.errors?.titulo : null}
                  />
                  <Inputdefault
                    label="Preço"
                    placeholder="R$59,99"
                    value={price}
                    onChange={(e: any) => {
                      props?.setFieldValue(
                        'preco',
                        formatPrice(e.target.value)
                          ?.replace(',', '.')
                          .replace(/[^\d.]/g, '')
                      );
                      handlePrice(e);
                    }}
                    name="preco"
                    error={props?.touched?.preco ? props?.errors?.preco : null}
                  />
                </div>

                <InputDescription
                  label="Resumo"
                  minHeight={150}
                  name="resumo"
                  placeholder="Escreva um breve resumo sobre o produto"
                  onChange={props?.handleChange}
                  value={props?.values?.resumo}
                  tooltip={'Descrição deve ter no minímo 10 caracteres'}
                  error={props?.touched?.resumo ? props?.errors?.resumo : null}
                />

                <div className="lineElementsWrapper">
                  <InputQuantity
                    label="Peso (g)"
                    min="0"
                    max="9999"
                    name="peso"
                    onChange={props?.handleChange}
                    value={props?.values?.peso}
                    error={props?.touched?.peso ? props?.errors?.peso : null}
                  />
                  <InputSelect
                    label="Status"
                    options={['Ativo', 'Inativo']}
                    name="status"
                    onChange={props?.handleChange}
                    value={props?.values?.status}
                    error={props?.touched?.status ? props?.errors?.status : null}
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
          </>
        )}
      </Formik>
    </S.Container>
  );
};

export default FormProduct;