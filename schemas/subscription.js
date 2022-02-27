import * as yup from 'yup'

export const subscriptionSchema = yup.object({
  email: yup
    .string()
    .min(3, 'Email must be at least 3 characters long')
    .max(100, 'Email must be maximum 100 characters long')
    .email('must be a valid email')
    .required('Email is a required field'),
})

export const backenSubscriptionSchema = yup.object({
  subscription: subscriptionSchema,
})
