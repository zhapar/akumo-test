import Button from 'components/Button'
import Input from 'components/Input'
import TextArea from 'components/TextArea'
import Image from 'next/image'
import React from 'react'

function Events() {
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
          <Input name="event-host-name" className="mt-8" placeholder="Name" />
          <Input
            name="event-email"
            className="mt-5"
            placeholder="Email"
            type="email"
          />
          <Input name="event-name" className="mt-5" placeholder="Event" />
          <Input
            name="event-date"
            className="mt-5"
            placeholder="Time & Date"
            type="date"
          />
          <Button className="mt-6">Submit</Button>
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
