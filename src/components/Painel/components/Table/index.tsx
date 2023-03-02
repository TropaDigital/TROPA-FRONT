// import { AlertIcon } from '@/src/assets/icons';
// import { useDeleteProduct } from '@/src/services/products/DELETE/useDeleteProduct';
// import { IGetProduct } from '@/src/services/products/GET/types';
// import { useDeleteRecipe } from '@/src/services/receitas/DELETE/useDeleteRecipes';
// import { IGetRecipes } from '@/src/services/receitas/GET/types';
// import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ButtonDefault from '../ButtonDefault';
import FormProduct from '../forms/FormProduct';
import FormRecipe from '../forms/FormRecipe';
import Modal from '../modal/ModalDefault';
import RenderTD from './RenderTD/RenderTD';
import { Container, ModalDeleteProduct } from './styles';
import { ITableProps } from './types';
// import { useQueryClient } from 'react-query';

export default function Table({ title, search, header, data }: ITableProps) {
  const [dataInternal, setDataInternal] = useState<any>(data);
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const [actualItem, setActualItem] = useState<any>();

  // const pathName = usePathname();

  // const queryClient = useQueryClient();

  // const { deleteRecipes } = useDeleteRecipe();
  // const { deleteProduct } = useDeleteProduct();

  useEffect(() => {
    if (data) {
      setDataInternal([...data]);
    }
  }, [data]);

  function handleModal(modalType: string, product: any) {
    setModalOpen(modalType);
  }

  // async function removeProductOrRecipe(id: number, type: 'recipe' | 'product') {
  //   if (type === 'product') {
  //     deleteProduct(id);
  //   } else {
  //     deleteRecipes(id);
  //   }
  //   setModalOpen('');
  // }

  return (
    <Container>
      {/* {modalOpen === 'editar' && (
        <Modal
          onClose={() => {
            setModalOpen(null);
          }}
          setData={() => {}}
        >
          {pathName?.includes('receitas') ? (
            <FormRecipe
              modalOpen="editar"
              actualItem={actualItem}
              onSubmit={() => {
                setModalOpen('');
              }}
            />
          ) : (
            <FormProduct
              modalOpen="editar"
              actualItem={actualItem}
              onSubmit={() => {
                setModalOpen('');
              }}
            />
          )}
        </Modal>
      )} */}

      {modalOpen === 'deletar' && (
        <Modal
          onClose={() => {
            setModalOpen(null);
          }}
          setData={() => {}}
        >
          <ModalDeleteProduct>
            {/* <AlertIcon /> */}
            <div className="modalTitleWarning">Excluir item</div>
            <div className="modalDescription">
              Tem certeza de que deseja excluir esse item ? Essa ação não poderá
              ser desfeita
            </div>
            <span className="buttonWrapper">
              <ButtonDefault
                color="transparent"
                onClick={() => {
                  setModalOpen('');
                }}
              >
                <p className="buttonText transparentButton">Cancelar</p>
              </ButtonDefault>
              <ButtonDefault
                color="darkButton"
                onClick={() => {
                  let itemType: any = actualItem?.id_receita
                    ? 'recipe'
                    : 'product';

                  // removeProductOrRecipe(
                  //   actualItem?.id_receita
                  //     ? actualItem?.id_receita
                  //     : actualItem?.id_produto,
                  //   itemType
                  // );
                }}
              >
                <p className="buttonText warningButton">Excluir</p>
              </ButtonDefault>
            </span>
          </ModalDeleteProduct>
        </Modal>
      )}

      <header className="headerTable">
        <p className="titleHeaderTable">{title}</p>
        <div className="buttonsWrapper">{search}</div>
      </header>
      <table>
        <thead>
          <tr>
            {header.map((row, key) => (
              <th align="left" key={key}>
                {row.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataInternal?.map((row: any, key: any) => (
            <tr key={key}>
              {header?.map((head: string | any, keyHead) => (
                <>
                  <RenderTD
                    key={keyHead}
                    head={head}
                    item={row}
                    onClickOptions={(modalType, product) => {
                      handleModal(modalType, product);
                      setActualItem(product);
                    }}
                  />
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
