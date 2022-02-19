import React from 'react'

function WorkingHours() {
  return (
    <div className="bg-gradient-to-r from-primary-100 to-secondary-600 py-16 md:py-20 text-white">
      <div className="container flex flex-col md:flex-row justify-between w-full md:gap-64">
        <figure className="flex flex-col w-full md:w-3/5">
          <blockquote className="text-lg">
            The best way to create value in the 21th century is to connect
            Creativity with Technology
          </blockquote>
          <figcaption className="self-end mt-3">- Steve Jobs</figcaption>
        </figure>
        <div className="mt-10 md:mt-0">
          <h3 className="text-lg font-normal italic whitespace-nowrap">
            aKumoHub hours
          </h3>
          <div className="mt-3">
            <div className="font-bold">Monday - Saturday</div>
            <div>9:00 AM - 6:00 PM</div>
          </div>
          <div className="mt-2">
            <div className="font-bold">Sunday</div>
            <div>Closed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkingHours
