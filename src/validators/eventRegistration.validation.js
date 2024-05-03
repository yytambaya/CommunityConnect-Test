import * as Yup from 'yup'

export const eventRegistrationSchema = Yup.object({
    firstName: Yup.string().max(200).required().label('first name'),
    lastName: Yup.string().max(200).required().label('last name'),
    email: Yup.string().email().max(200).required(),
    //imageURL: Yup.string().url().max(2000).required()
    //categories: Yup.string().oneOf(events.categories)
}) 