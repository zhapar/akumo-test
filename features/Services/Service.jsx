import { motion } from 'framer-motion'
import Image from 'next/image'

function Service({ id, name, imageSrc, description, activeService, ...props }) {
  return (
    <>
      <div
        className="col-span-3 sm:col-span-1 w-full cursor-pointer group"
        {...props}>
        {/* {activeService?.id !== id ? ( */}
        <motion.div
          className="relative p-5 w-full aspect-[16/10] service-card rounded block overflow-hidden transition-transform duration-300 transform group-hover:scale-105"
          // layoutId={id}
          // transition={{
          //   default: { duration: 0.3 },
          // }}
        >
          <Image
            src={imageSrc}
            className="object-contain"
            layout="fill"
            quality="100"
            alt={name}
          />
        </motion.div>
        {/* ) : null} */}
        {/* // {activeService?.id === id && ( */}
        {/* //   <motion.div */}
        {/* //     layoutId="underline"
        //     className="bg-sky-400 w-full h-2"></motion.div>
        // )} */}
        <h4 className="mt-3 font-normal text-base font-noto">{name}</h4>
      </div>
    </>
  )
}

export default Service
