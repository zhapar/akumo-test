import * as yup from 'yup'

export const eventSchema = yup.object({
  host_name: yup
    .string()
    .max(100, 'Host name must be maximum 100 characters long')
    .required('Host name is a required field'),
  host_email: yup
    .string()
    .min(3, 'Email must be at least 3 characters long')
    .max(100, 'Email must be maximum 100 characters long')
    .email('must be a valid email')
    .required('Email is a required field'),
  event_name: yup
    .string()
    .min(2, 'Event name must be at least 2 characters long')
    .max(150, 'Event name must be maximum 100 characters long')
    .required('Event name is a required field'),
  date_and_time: yup
    .date()
    .min(new Date(Date.now()))
    .required('Date & Time is a required field'),
})

export const backendEventSchema = yup.object({
  event: eventSchema,
})
