import Button from 'components/Button'
import Input from 'components/Input'
import Image from 'next/image'
import React from 'react'

function Subscription() {
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
          There are a few strategies being deployed here, but the most critical
          one is layering. Instead of a single shadow, we stack 5 or 6
          individual shadow layers.{' '}
        </p>
        <Input
          name="subsription-email"
          className="mt-5"
          placeholder="Your email"
        />
        <Button className="mt-6">Subscribe</Button>
      </div>
    </section>
  )
}

export default Subscription
