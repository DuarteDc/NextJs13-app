import * as yup from 'yup';

export const LoginAuthValidation = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
})