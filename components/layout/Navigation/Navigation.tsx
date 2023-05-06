'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

const LINKS = [
  { url: '/tienda', name: 'Tienda' },
  { url: '/nosotros', name: 'Nosotros' },
  { url: '/creadores', name: 'Creadores' },
  { url: '/quiero-apoyar', name: 'Quiero apoyar' },
  { url: '/quiero-ser-parte', name: 'Quiero ser parte' },
  { url: '/blog', name: 'Blog' },
]

const Navigation = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false)

  const handleMenuButtonClick = () => {
    setIsNavigationOpen(!isNavigationOpen)
  }

  return (
    <div className="relative flex justify-between items-center">
      <div>LOGO</div>
      <nav
        className={`absolute bg-white top-10 w-screen ${
          !isNavigationOpen ? 'hidden' : ''
        } lg:static lg:w-auto lg:block`}
      >
        {LINKS.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="block lg:inline-block p-3 hover:bg-slate-100"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <button onClick={handleMenuButtonClick} className="p-3 lg:hidden">
        {isNavigationOpen ? <FiX /> : <FiMenu />}
      </button>
    </div>
  )
}

export default Navigation
