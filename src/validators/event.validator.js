import * as Yup from 'yup'

export const eventSchema = Yup.object({
    title: Yup.string().max(200).required(),
    description: Yup.string().max(200).required(),
    startDate: Yup.date().required(),
    endDate: Yup.date().required(),
    eventLocation: Yup.string().max(200).required(),
    privacy: Yup.string().max(100).required(),
    eventLocation: Yup.string().max(200).required(),
    ticketFee: Yup.string().max(100).required(),
    ticketNumber: Yup.string().max(200).required(),
    image: Yup.string().max(200).required(),
    category: Yup.string().max(200).required()
}) 