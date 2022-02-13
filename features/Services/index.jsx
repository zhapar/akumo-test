import Image from 'next/image'
import { useState, forwardRef } from 'react'
import Service from 'features/Services/Service'
import { AnimatePresence, motion } from 'framer-motion'

const services = [
  {
    id: 'sessions',
    name: 'Sessions',
    imageSrc: '/sessions.svg',
    description: [
      'Our sessions involve hands-on practice with real-life scenarios and support by experts in the field. Master your skills in here, to execute better out there.',
    ],
  },
  {
    id: 'certifications',
    name: 'Certifications',
    imageSrc: '/certifications.svg',
    description: [
      'Certifications provide in-depth knowledge and validate your expertise. Our content is built by professionals and updated frequently to keep you in demand.',
    ],
  },
  {
    id: 'career-coaching',
    name: 'Career Coaching',
    imageSrc: '/career-coaching.svg',
    description: [
      'We have one goal - helping you achieve yours. We know you have the capacity to perform at a higher level, let us provide the guidance and the support you need. ',
    ],
  },
  {
    id: 'community',
    name: 'Community',
    imageSrc: '/community.svg',
    description: [
      "We help communities with their technical needs. Whether it's consulting or defined implementation, aKumoSolutions is here to support your community to grow along with today’s technology.",
    ],
  },
  {
    id: 'business',
    name: 'Business',
    imageSrc: '/business.svg',
    description: [
      'Helping Small Businesses is one of our primary objectives that aligns with our company vision. As technology grows at an incredibly high speed, we are here to support smaller businesses with their technical growth. Whether its simple domain name, emailing, website, or custom application. We help your business to better grasp the opportunities of technological advancement of today’s era.',
    ],
  },
  {
    id: 'bootcamp-experience',
    name: 'Bootcamp Experience',
    imageSrc: '/bootcamp-experience.svg',
    description: [
      'aKumoSolutions provides a well thought out curriculum with precise requirements to become a Cloud/DevOps engineer. Throughout your bootcamp experience you will shape both your technical/soft skills and engineering mindset. We strongly believe that critical thinking and assertiveness is as important as your technical knowledge.',
    ],
  },
]

function Services() {
  const ease = [0.6, 0.01, -0.05, 0.9]
  const [open, setOpen] = useState(false)
  const [activeService, setActiveService] = useState(null)

  return (
    <>
      <section id="services" className="container pt-20 pb-10 ">
        <h2>Services</h2>
        <div className="grid grid-cols-3 gap-5 mt-12">
          {services.map((props) => (
            <Service
              {...props}
              key={props.id}
              activeService={activeService}
              onClick={() => {
                setOpen(true)
                setActiveService(props)
              }}
            />
          ))}
        </div>
      </section>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div className="fixed top-0 left-0 w-screen h-screen z-30 flex justify-center items-center overflow-y-hidden">
            <motion.div
              className="absolute top-0 left-0 w-screen h-screen backdrop-blur-md"
              style={{
                background:
                  'linear-gradient(176.63deg, rgba(145, 60, 164, 0.5) -5.36%, rgba(67, 121, 198, 0.5) 105.64%)',
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ default: { duration: 0.5 }, ease }}
              onClick={() => {
                setOpen(false)
                setActiveService(null)
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 flex flex-col md:flex-row transform -translate-x-1/2 -translate-y-1/2 container justify-between items-center outline-none"
              style={{ pointerEvents: 'none' }}>
              <motion.div
                className="relative md:p-5 w-[90%] md:w-1/2 aspect-[16/10] service-card rounded block overflow-hidden pointer-events-auto z-10"
                initial={{
                  opacity: 0,
                  x: -200,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                exit={{
                  opacity: 0,
                  x: -200,
                }}
                transition={{
                  type: 'just',
                  ease,
                }}>
                <Image
                  src={activeService?.imageSrc}
                  className="object-contain"
                  layout="fill"
                  quality="100"
                  alt={activeService?.name}
                />
              </motion.div>
              <motion.div
                className="w-full -mt-5 md:mt-0 md:w-1/2 text-white py-10 md:py-16 rounded md:rounded-r px-5 pointer-events-auto"
                style={{
                  background:
                    'linear-gradient(184.82deg, rgba(145, 60, 164, 0.7) -10.49%, rgba(67, 121, 198, 0.7) 122.42%)',
                }}
                initial={{
                  opacity: 0,
                  x: 200,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                exit={{
                  opacity: 0,
                  x: 200,
                }}
                transition={{
                  type: 'just',
                  ease,
                }}>
                <h3>{activeService?.name}</h3>
                <p className="mt-5">{activeService?.description[0]}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Services
