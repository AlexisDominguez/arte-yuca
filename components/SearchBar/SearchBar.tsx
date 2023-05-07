import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className="relative">
      <FiSearch className="absolute top-1 left-2 text-2xl" />
      <input
        type="search"
        placeholder="Search for something"
        className="py-1 pl-10 pr-3 border-black border rounded-lg focus:outline-0"
      />
    </div>
  )
}

export default SearchBar
