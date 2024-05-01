import * as Yup from 'yup'
import { events } from '../data/event.data'

export const eventSchema = Yup.object({
    title: Yup.string().max(200).required(),
    description: Yup.string().max(2000).required(),
    cohost: Yup.string().max(1000),
    startDate: Yup.date().required().typeError('starting date is required in mm/dd/yyyy').label("start date"),
    endDate: Yup.date().required().typeError('ending date is required in mm/dd/yyyy').label('end date'),
    location: Yup.string().max(200).required().label('location'),
    privacy: Yup.string().oneOf(events.privacies).required(),
    ticketFee: Yup.number().min(0).max(100000000000000).required().typeError('ticket fee is required').label('ticket fee is required'),
    ticketNumber: Yup.number().min(1).max(100000000000).required().typeError('ticket number is required').label('ticket number'),
    //imageURL: Yup.string().url().max(2000).required()
    //categories: Yup.string().oneOf(events.categories)
}) 