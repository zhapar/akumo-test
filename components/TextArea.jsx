import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

function TextArea({
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
      y: '-150%',
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
          className="absolute top-6 transform -translate-y-1/2 left-3 px-1 bg-secondary-100 cursor-text">
          {placeholder}
        </motion.label>
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => {
            setFocused(true)
          }}
          onBlur={(e) => {
            if (onBlur) {
              onBlur(e)
            }
            setFocused(false)
          }}
          className={clsx(
            'py-2 px-3 outline-none placeholder-gray-800 w-full h-36'
          )}
          style={{
            background:
              'linear-gradient(#F5FAFF, #F5FAFF) padding-box, linear-gradient(to bottom right, #9439A2, #3F7BC7) border-box',
            borderRadius: '10px',
            border: '2px solid transparent',
          }}
          {...props}
        />
      </div>
      {typeof error === 'string' ? (
        <span id={`${name}-error`} className="text-red-500 text-sm">
          {error}
        </span>
      ) : null}
    </div>
  )
}

export default TextArea
