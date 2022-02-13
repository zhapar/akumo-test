import Image from 'next/image'
import Button from 'components/Button'

function About() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-end md:justify-between container md:items-center h-[calc(100vh-5.7rem)] gap-10">
      <div className="w-full md:w-2/5 ">
        <h2>aKumoSolutions</h2>
        <p className="mt-2 md:mt-5">
          A tech hub powered by network of engineers. At aKumoSolutions we
          empower businesses and individuals to achieve their full potential
          through variety of services.
        </p>
        <p className="mt-2">
          We value your ambition and strive to deliver solutions.
        </p>
        <Button className="mt-6">Services</Button>
      </div>
      <div className="w-full md:w-3/5 relative md:h-full h-2/5 mt-5 md:mt-0">
        <Image
          src="/cloud-management.svg"
          layout="fill"
          quality={100}
          alt="Cloud Management"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  )
}

export default About
