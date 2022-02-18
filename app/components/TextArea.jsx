import React from 'react'
import clsx from 'clsx'

function TextArea({ className, ...props }) {
  return (
    <textarea
      className={clsx(
        'py-2 px-3 outline-none placeholder-gray-800 w-full h-36',
        className
      )}
      {...props}
      style={{
        background:
          'linear-gradient(#F5FAFF, #F5FAFF) padding-box, linear-gradient(to bottom right, #9439A2, #3F7BC7) border-box',
        borderRadius: '10px',
        border: '2px solid transparent',
      }}
    />
  )
}

export default TextArea
