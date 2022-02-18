import Button from 'components/Button'
import Input from 'components/Input'
import TextArea from 'components/TextArea'
import Image from 'next/image'
import React from 'react'

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row justify-between container items-center gap-10 md:h-[60vh] pt-10 lg:py-10 lg:mt-10">
      <div className="relative w-full md:w-1/2 h-80 md:h-full">
        <Image
          src="/contact.svg"
          alt="Subscribe for events"
          layout="fill"
          quality={100}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 md:pr-28">
        <h2>Contact us</h2>
        <p className="mt-5">For more information and how to sign up</p>
        <Input name="contact-name" className="mt-5" placeholder="Name" />
        <Input name="contact-email" className="mt-5" placeholder="Email" />
        <TextArea
          name="contact-message"
          className="mt-5"
          placeholder="Message"
        />
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:support@akumosolutions.io">
          <Button className="mt-6">Send Message</Button>
        </a>
      </div>
    </section>
  )
}

export default Contact
