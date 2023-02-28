import { IGetProduct } from '@/src/services/products/GET/types';
import { IGetRecipes } from '@/src/services/receitas/GET/types';

export interface IRenderTD {
  onClickOptions: (e: string, product: IGetProduct | IGetRecipes) => void;
  head: {
    key: 'peso' | 'status' | 'titulo' | 'produtoImagens' | 'id_produto';
    label: string;
    type: string;
  };
  item: IGetProduct | IGetRecipes;
  openMenu?: (modal: 'edit' | 'delete') => void;
}
