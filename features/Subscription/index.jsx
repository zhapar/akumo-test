import Button from 'components/Button'
import Input from 'components/Input'
import Image from 'next/image'
import { Formik, Form, Field } from 'formik'
import { subscriptionSchema } from 'schemas/subscription'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

function Subscription() {
  const createSubscription = async (subscription) => {
    const response = await fetch('/api/subscription/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subscription }),
    })

    const data = response.json()
    return data
  }

  const { mutateAsync } = useMutation(createSubscription, {
    onSuccess: () => {
      toast.success('You successfully subscribed for new events!')
    },
    onError: () => {
      toast.error("Couldn't subscribe for new events")
    },
  })

  const onSubmit = async (values, actions) => {
    await mutateAsync(values)
    actions.setSubmitting(false)
    actions.resetForm()
  }

  return (
    <section
      id="subscription"
      className="flex flex-col md:flex-row justify-between container items-center gap-10 md:h-[60vh] py-10">
      <div className="relative w-full md:w-1/2 h-60 md:h-full mt-10 md:mt-0">
        <Image
          src="/messaging.svg"
          alt="Subscribe for events"
          layout="fill"
          quality={100}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2>Subscribe for new events!</h2>
        <p className="mt-5">
          Get technology news and updates on exciting new offers and services
          from aKumoSolutions!
        </p>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={subscriptionSchema}
          onSubmit={onSubmit}>
          {({ errors, touched }) => (
            <Form>
              <Field
                as={Input}
                name="email"
                className="mt-5"
                placeholder="Your email"
                error={errors.email && touched.email ? errors.email : null}
              />
              <Button className="mt-6" type="submit">
                Subscribe
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default Subscription
