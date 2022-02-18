import React from 'react'
import clsx from 'clsx'

function Button({ children, className, ...props }) {
  return (
    <button
      className={clsx(
        'rounded py-2 px-8 text-white bg-gradient-to-r from-primary-200 to-secondary-500',
        className
      )}
      {...props}>
      {children}
    </button>
  )
}

export default Button
