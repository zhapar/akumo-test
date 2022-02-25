import * as yup from 'yup'

// export const eventSchema = object({
//   name: string().required().min(2),
//   age: number().required().integer().min(18),
//   email: string().optional().email(),
//   personalWebsite: string().optional().url(),
//   nationalities: array(
//     object({
//       country: string().required().oneOf(['PT', 'UK']),
//       observation: string().optional().max(5000),
//     })
//   ).required().min(1),
// });

export const eventSchema = yup.object({
  event: yup.object({
    host_name: yup
      .string()
      .min(3, 'must be at least 3 characters long')
      .max(100, 'must be maximum 100 characters long')
      .required(),
    host_email: yup
      .string()
      .min(3, 'must be at least 3 characters long')
      .max(100, 'must be maximum 100 characters long')
      .email('must be a valid email')
      .required(),
    event_name: yup
      .string()
      .min(3, 'must be at least 3 characters long')
      .max(150, 'must be maximum 100 characters long')
      .required(),
    date_and_time: yup.date().min(new Date(Date.now())).required(),
  }),
})
