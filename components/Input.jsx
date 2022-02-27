import clsx from 'clsx'
import { useState } from 'react'
import { motion } from 'framer-motion'

function Input({
  className,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  onBlur,
  ...props
}) {
  const [focused, setFocused] = useState(false)
  const labelVariants = {
    initial: {
      y: '-50%',
      scale: 1,
    },
    focused: {
      y: '-140%',
      scale: 0.9,
      color: typeof error === 'string' ? 'rgb(239 68 68)' : '#9439A2',
    },
  }

  return (
    <div>
      <div className={clsx('relative', className)}>
        <motion.label
          variants={labelVariants}
          htmlFor={name}
          animate={
            focused ||
            (value && value !== '') ||
            type === 'date' ||
            type === 'datetime-local'
              ? 'focused'
              : 'initial'
          }
          transition={{
            type: 'just',
            ease: 'easeIn',
            default: { duration: 0.25 },
          }}
          className="absolute top-1/2 transform -translate-y-1/2 left-3 px-1 bg-secondary-100 cursor-text">
          {placeholder}
        </motion.label>
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          onFocus={() => {
            setFocused(true)
          }}
          onBlur={(e) => {
            if (onBlur) {
              onBlur(e)
            }
            setFocused(false)
          }}
          className={clsx('py-2 px-3 outline-none placeholder-gray-800 w-full')}
          {...props}
          style={{
            background:
              typeof error === 'string'
                ? 'linear-gradient(#F5FAFF, #F5FAFF) padding-box, linear-gradient(to bottom right, rgb(239 68 68), rgb(239 68 68)) border-box'
                : 'linear-gradient(#F5FAFF, #F5FAFF) padding-box, linear-gradient(to bottom right, #9439A2, #3F7BC7) border-box',
            borderRadius: '10px',
            border: '2px solid transparent',
          }}></input>
      </div>
      {typeof error === 'string' ? (
        <span id={`${name}-error`} className="text-red-500 text-sm">
          {error}
        </span>
      ) : null}
    </div>
  )
}

export default Input
