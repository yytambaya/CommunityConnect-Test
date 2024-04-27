import * as Yup from 'yup'

export const userSchema = Yup.object({
    name: Yup.string().max(200).required(),
    email: Yup.string().email().max(200).required().label('email'),
    password: Yup.string().max(1000).required().label('password'),
}) 