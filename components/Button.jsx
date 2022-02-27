import { forwardRef } from 'react'
import clsx from 'clsx'

const Button = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        'rounded py-2 px-8 text-white bg-gradient-to-r from-primary-200 to-secondary-500',
        className
      )}
      {...props}>
      {children}
    </button>
  )
})

Button.displayName = 'Button component'

export default Button
