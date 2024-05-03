import * as Yup from 'yup'

export const postSchema = Yup.object({
    text: Yup.string().max(200).required(),
    eventCode: Yup.string().max(200).required(),
    image: Yup.date().required()
}) 