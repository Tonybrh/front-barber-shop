import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    phone: yup
        .string()
        .required('Telefone é obrigatório')
        .matches(/^\(\d{2}\)\s\d{5}-\d{4}$/, 'Telefone inválido'),
    email: yup.string().required('Email é obrigatório').email('Email inválido'),
    password: yup
        .string()
        .required('Senha é obrigatória')
        .min(6, 'Senha deve ter pelo menos 6 caracteres')
        .max(20, 'Senha não pode ter mais de 20 caracteres'),
});
