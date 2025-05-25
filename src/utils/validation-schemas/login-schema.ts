import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().required('Email é obrigatório').email('Email inválido'),
    password: yup
        .string()
        .required('Senha é obrigatória')
        .min(5, 'Senha deve ter pelo menos 6 caracteres')
        .max(20, 'Senha não pode ter mais de 20 caracteres'),
}); 