import * as Yup from 'yup'

export const eventRequestSchema = Yup.object({
    name: Yup.string().max(200).required(),
    description: Yup.string().max(200).required(),
    preferredDate: Yup.date().required(),
    preferredTime: Yup.date().required(),
    eventLocation: Yup.string().max(200).required(),
    location: Yup.string().max(100).required(), eventLocation: Yup.string().max(200).required(),
    eventLocation: Yup.string().max(200).required(),
    ticketFee: Yup.string().max(100).required(),
    ticketNumber: Yup.string().max(200).required(),
    image: Yup.string().max(200).required(),
    category: Yup.string().max(200).required()
}) 