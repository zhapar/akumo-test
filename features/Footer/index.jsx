import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary-100 to-secondary-600 py-10 text-white mt-10 lg:mt-20">
      <div className="container flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:support@akumosolutions.io">
          support@akumosolutions.io
        </a>
        <span>Copyright © 2022 aKumoSolutions LLC</span>
        <a target="_blank" rel="noreferrer" href="tel:+1(847)745-9421">
          +1 (847) 745-9421
        </a>
      </div>
    </footer>
  )
}

export default Footer
