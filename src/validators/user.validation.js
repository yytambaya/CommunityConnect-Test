import * as Yup from 'yup'

export const userSignupSchema = Yup.object({
    name: Yup.string().max(200).required(),
    email: Yup.string().email().max(200).required().label('email'),
    password: Yup.string().max(1000).required().label('password'),
    age: Yup.bool().oneOf([true, 'field must be checked']).required().label("age"),
}) 

export const userLoginSchema = Yup.object({
    email: Yup.string().email().max(200).required().label('email'),
    password: Yup.string().max(1000).required().label('password'),
    rememberMe: Yup.bool().label("remember me"),
}) 

export const userForgetPasswordSchema = Yup.object({
    email: Yup.string().email().max(200).required().label('email'),
}) 
