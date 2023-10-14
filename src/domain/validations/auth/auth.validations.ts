import * as yup from 'yup';

export const loginAuthValidation = yup.object({
    email: yup.string().email('El correo debe ser un correo valido').required('El correo es requerido'),
    password: yup.string().min(8, 'La contraseña debe ser mayor a 8 caracteres').required('La contraseña es requerida'),
});

export const forgotPasswordValidations = yup.object({
    email: yup.string().email('El correo debe ser un correo valido').required('El correo es requerido'),
})