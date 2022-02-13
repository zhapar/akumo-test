import clsx from 'clsx'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { v4 as uuid } from 'uuid'

function Input({
  className,
  name = uuid(),
  type = 'text',
  placeholder,
  ...props
}) {
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)
  const labelVariants = {
    initial: {
      y: '-50%',
      scale: 1,
    },
    focused: {
      y: '-140%',
      scale: 0.9,
      color: '#9439A2',
    },
  }

  return (
    <div className={clsx('relative', className)}>
      <motion.label
        variants={labelVariants}
        htmlFor={name}
        animate={focused || value || type === 'date' ? 'focused' : 'initial'}
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
        onChange={(e) => {
          setValue(e.target.value)
        }}
        type={type}
        onFocus={() => {
          setFocused(true)
        }}
        onBlur={() => {
          setFocused(false)
        }}
        className={clsx('py-2 px-3 outline-none placeholder-gray-800 w-full')}
        {...props}
        style={{
          background:
            'linear-gradient(#F5FAFF, #F5FAFF) padding-box, linear-gradient(to bottom right, #9439A2, #3F7BC7) border-box',
          borderRadius: '10px',
          border: '2px solid transparent',
        }}></input>
    </div>
  )
}

export default Input
