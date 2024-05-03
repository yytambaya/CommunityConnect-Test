import * as Yup from 'yup'
import { community } from '../data/community.data'

export const communitySchema = Yup.object({
    name: Yup.string().max(200).required(),
    description: Yup.string().max(2000).required(),
    location: Yup.string().max(200).required().label('location'),
    privacy: Yup.string().oneOf(community.privacies).required(),
    ticketFee: Yup.number().min(0).max(100000000000000).typeError('ticket fee is required').label('ticket fee is required'),
    //imageURL: Yup.string().url().max(2000).required()
    //categories: Yup.string().oneOf(events.categories)
}) 