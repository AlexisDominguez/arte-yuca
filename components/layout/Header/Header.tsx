import React from 'react'
import Navigation from '../Navigation'
import Image from 'next/image'
import HeaderLogoImage from '@/public/images/header-logo.svg'
import SearchBar from '@/components/SearchBar/SearchBar'
import ShoppingBag from '@/components/ShoppingBag/ShoppingBag'
import UserProfile from '@/components/UserProfile/UserProfile'

const Header = () => {
  // TODO: Style Correctly with finished design

  return (
    <header className="sticky top-0 w-full p-3 flex justify-between items-center">
      <div className="hidden lg:inline">
        <Image src={HeaderLogoImage} alt="Arte Yuca Logo" />
      </div>
      <Navigation />
      <SearchBar />
      <ShoppingBag />
      <UserProfile />
    </header>
  )
}

export default Header
