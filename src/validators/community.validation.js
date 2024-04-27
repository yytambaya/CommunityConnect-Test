import * as Yup from 'yup'

export const eventSchema = Yup.object({
    name: Yup.string().max(200).required(),
    description: Yup.string().max(200).required(),
    location: Yup.date().required(),
    privacy: Yup.string().max(100).required(),
    ticketNumber: Yup.string().max(200).required(),
    category: Yup.string().max(200).required()
}) 