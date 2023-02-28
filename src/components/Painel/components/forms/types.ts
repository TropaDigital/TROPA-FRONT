export interface IProduct {
  descricao: string;
  peso: string;
  preco: string;
  titulo: string;
  status: string;
  slug: string;
}

export interface IRecipe {
  descricao: string;
  dificuldade: string;
  ingredientes: string;
  modo_preparo: string;
  status: string;
  tempo: string;
  titulo: string;
  slug: string;
  porcao: string;
}

export interface IActualItemProduct {
  descricao: string;
  id_produto: number;
  peso: string;
  produtoImagens: any[];
  slug: string;
  status: string;
  titulo: string;
  valor: string;
}

export interface IActualItemRecipe {
  dificuldade: string;
  id_receita: string;
  ingredientes: string;
  modo_preparo: string;
  produtoImagens: any[];
  qtd_porcao: string;
  resumo: string;
  slug: string;
  status: string;
  tempo_preparo: string;
  titulo: string;
}

export interface IInitialValuesProduct {
  images: string[];
  titulo: string;
  preco: string;
  resumo: string;
  peso: string;
  status: string;
  slug: string;
}

export interface IInitialValuesRecipe {
  images: string[];
  titulo: string;
  porcao: string;
  tempo: string;
  resumo: string;
  preparo: string;
  ingredientes: string;
  dificuldade: string;
  status: string;
  slug: string;
}
