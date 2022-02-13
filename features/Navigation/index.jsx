import { MenuToggle } from './MenuToggle'
import { useRef } from 'react'
import { motion, useCycle, AnimatePresence } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { useDimensions } from './use-dimensions'

import Link from 'next/link'
import { FacebookLogo, TelegramLogo, InstagramLogo } from 'icons'
import Image from 'next/image'

export const links = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Services',
    link: '/#services',
  },
  {
    title: 'Events',
    link: '/#events',
  },
  {
    title: 'Contact',
    link: '/#contact',
  },
]

export const contacts = [
  {
    Icon: FacebookLogo,
    link: 'https://www.facebook.com/AKumoSolutions-100763001568331/',
  },
  {
    Icon: TelegramLogo,
    link: 'https://t.me/akumosolutions',
  },
  {
    Icon: InstagramLogo,
    link: 'https://www.instagram.com/akumosolutions/',
  },
]

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = () => {
  return (
    <motion.ul
      className="fixed top-0 left-0 bg-secondary-100 h-screen w-screen z-30 flex flex-col"
      variants={variants}
      initial="closed"
      animate="open">
      <div className="mt-32 px-5 grid gap-3">
        {links.map(({ title, link }) => (
          <MenuItem href={link} key={link}>
            {title}
          </MenuItem>
        ))}
      </div>
    </motion.ul>
  )
}

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      className="flex"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}>
      {isOpen && (
        <div onClick={toggleOpen}>
          <Navigation />
        </div>
      )}

      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  )
}

export default function Navbar({ className, ...props }) {
  return (
    <div className="flex justify-between items-center w-full sticky top-0 z-20 bg-secondary-100 bg-opacity-70 backdrop-filter backdrop-blur-lg">
      <nav className="flex items-center justify-between py-4 h-20 container">
        <Link href="/">
          <a className="relative h-14 w-24">
            <Image
              src="/logo.svg"
              layout="fill"
              alt="aKumoSolutions"
              className="w-full h-full"
            />
          </a>
        </Link>
        <div className="hidden sm:flex">
          {links.map(({ title, link }) => (
            <Link href={link} key={link}>
              <a className="font-primary text-base text-black leading-xl bg-gradient-to-br  bg-clip-text from-primary-200 to-secondary-500 hover:text-transparent flex px-4 transition-colors duration-300 ease-in-out">
                {title}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex">
          {contacts.map(({ Icon, link }) => (
            <a
              href={link}
              key={link}
              target="_blank"
              rel="noreferrer"
              className="font-primary font-bold text-lg leading-xl px-3">
              <Icon className="w-5 text-black bg-gradient-to-br bg-clip-text from-primary-200 to-secondary-500 hover:text-secondary-600 stroke-current" />
            </a>
          ))}
        </div>
        <div className="sm:hidden">
          <Sidebar />
        </div>
      </nav>
    </div>
  )
}
