import React from 'react'
import Navigation from '../Navigation'
import Image from 'next/image'
import HeaderLogoImage from '@/public/images/header-logo.svg'

const Header = () => {
  return (
    <header className="sticky top-0 w-full p-3 flex justify-between items-center">
      <div>
        <Image src={HeaderLogoImage} alt="Arte Yuca Logo" />
      </div>
      <Navigation />
    </header>
  )
}

export default Header
