import * as yup from 'yup'

export function validate(schema, handler) {
  return async (req, res) => {
    if (['POST', 'PUT'].includes(req.method)) {
      try {
        const newSchema =
          req.method === 'POST'
            ? schema
            : schema.concat(yup.object({ id: yup.string().uuid().required() }))

        req.body = await newSchema.validate(req.body, {
          abortEarly: false,
          stripUnknown: true,
        })
      } catch (error) {
        return res.status(400).json(error)
      }
    }
    await handler(req, res)
  }
}
