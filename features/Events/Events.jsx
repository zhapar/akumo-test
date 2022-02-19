import React from 'react'

function Events() {
  return (
    <>
      <h2>Events</h2>
      <div className="flex mt-8 gap-6 justify-between">
        <div
          className="aspect-[1/5] w-28 p-[3px] rounded flex flex-col justify-between items-center pt-28 pb-8"
          style={{
            background:
              'linear-gradient(#F5FAFF, #F5FAFF) padding-box, linear-gradient(to bottom right, #9439A2, #3F7BC7) border-box',
            border: '3px solid transparent',
          }}>
          <h4
            className="font-normal font-roboto text-xl uppercase"
            style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
            Event 1
          </h4>
          <div className="flex flex-col items-center text-sm">
            <span>February 6</span>
            <span>2022</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events
