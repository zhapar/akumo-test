import Button from 'components/Button'
import Input from 'components/Input'
import Image from 'next/image'
import React from 'react'
import { Formik, Form, Field } from 'formik'
import { eventSchema } from 'schemas/event'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import SubmitButton from 'components/SubmitButton'

function Events() {
  const createEvent = async (event) => {
    const response = await fetch('/api/events/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ event }),
    })

    const data = response.json()
    return data
  }

  const { mutateAsync, isLoading, isSuccess } = useMutation(createEvent, {
    onSuccess: () => {
      toast.success('The event is submitted successfully!')
    },
    onError: () => {
      toast.error("Couldn't submit the event")
    },
  })

  const onSubmit = async (values, actions) => {
    await mutateAsync(values)
    actions.setSubmitting(false)
    actions.resetForm()
  }

  return (
    <section
      id="events"
      className="flex flex-col-reverse md:flex-row justify-between container items-center gap-20 md:h-[60vh] lg:pt-24 lg:pb-10 mt-10">
      <div className="w-full md:w-[calc(50%+3rem)] md:pr-14">
        <h2>Have an event you want to host?</h2>
        <div className="lg:pr-10">
          <p className="mt-5 ">
            Networking is valuable source of new ideas and perspectives! Join
            our events or host one yourself!
          </p>
          <Formik
            initialValues={{
              host_name: '',
              host_email: '',
              event_name: '',
              date_and_time: '',
            }}
            validationSchema={eventSchema}
            onSubmit={onSubmit}>
            {({ errors, touched }) => (
              <Form>
                <Field
                  as={Input}
                  name="host_name"
                  className="mt-8"
                  placeholder="Host name"
                  error={
                    errors.host_name && touched.host_name
                      ? errors.host_name
                      : null
                  }
                />
                <Field
                  as={Input}
                  name="host_email"
                  className="mt-5"
                  placeholder="Email"
                  type="email"
                  error={
                    errors.host_email && touched.host_email
                      ? errors.host_email
                      : null
                  }
                />
                <Field
                  as={Input}
                  name="event_name"
                  className="mt-5"
                  placeholder="Event name"
                  error={
                    errors.event_name && touched.event_name
                      ? errors.event_name
                      : null
                  }
                />
                <Field
                  as={Input}
                  name="date_and_time"
                  className="mt-5"
                  placeholder="Time & Date"
                  type="datetime-local"
                  error={
                    errors.date_and_time && touched.date_and_time
                      ? errors.date_and_time
                      : null
                  }
                />
                <Button className="mt-6" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="relative w-full md:w-[calc(50%-3rem)] h-60 md:h-full">
        <Image
          src="/events.svg"
          alt="Host your own event"
          layout="fill"
          quality={100}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  )
}

export default Events
