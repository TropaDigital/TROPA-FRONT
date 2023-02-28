import * as yup from 'yup';

export const formProductsSchema = yup?.object()?.shape({
  images: yup
    ?.array()
    .of(yup.string())
    .min(1, 'O produto deve conter pelo menos 1 imagem.')
    .required(),
  titulo: yup
    ?.string()
    .min(3, 'O título do produto deve conter pelo menos 3 caracteres')
    .required('O produto deve conter um título'),
  preco: yup
    ?.string()
    .min(0.01, 'O valor do produto deve ser superior a R$0,00')
    .required('O produto deve conter um valor'),
  resumo: yup
    ?.string()
    .min(10, 'O resumo deve conter no minímo 10 caracteres')
    .required('O resumo é obrigatório'),
  peso: yup
    ?.string()
    .min(1, 'O peso do produto deve ser maior que 0g')
    .required('O peso é obrigatório'),
  status: yup?.string().required('É necessário o status do produto'),
});

export const formRecipeSchema = yup?.object()?.shape({
  images: yup
    ?.array()
    .of(yup.string())
    .min(1, 'A receita deve conter pelo menos 1 imagem.')
    .required(),
  titulo: yup
    ?.string()
    .min(3, 'O título da receita deve conter pelo menos 3 caracteres')
    .required('A receita deve conter um título'),
  porcao: yup
    ?.string()
    .min(1, 'A porção deve ser maior do que 0')
    .required('Porção é obrigatória'),
  tempo: yup
    ?.string()
    .min(1, 'O tempo deve ser maior que 0')
    .required('Tempo é obrigatório'),
  preparo: yup
    ?.string()
    .min(10, 'O modo de preparo deve ter no minímo 10 caracteres')
    ?.required('O modo de preparo é obrigatório'),
  resumo: yup
    ?.string()
    .min(10, 'O resumo deve conter no minímo 10 caracteres')
    .required('O resumo é obrigatório'),
  ingredientes: yup
    ?.string()
    .min(10, 'O campo de ingredientes deve conter no minímo 10 caracteres')
    .required('O campo de ingredientes é obrigatório'),
  dificuldade: yup?.string().required('É necessária a dificuldade da receita'),
  status: yup?.string().required('É necessário o status do receita'),
});