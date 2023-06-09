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

  const handleIsNavigationOpen = () => {
    setIsNavigationOpen(!isNavigationOpen)
  }

  return (
    <>
      <nav
        className={`absolute bg-white top-14 w-full right-0 left-0 ${
          !isNavigationOpen ? 'hidden' : ''
        } lg:static lg:w-auto lg:block`}
      >
        {LINKS.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            onClick={handleIsNavigationOpen}
            className="block lg:inline-block p-3 hover:bg-slate-100"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <button onClick={handleIsNavigationOpen} className="p-3 lg:hidden">
        {isNavigationOpen ? <FiX /> : <FiMenu />}
      </button>
    </>
  )
}

export default Navigation
