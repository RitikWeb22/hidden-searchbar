import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false)
  const [bgColor, setBgColor] = useState('white')
  const [searchText, setSearchText] = useState('')

  const handleMouseEnter = () => {
    setShowInput(true)
    setBgColor('black')
  }

  const handleMouseLeave = () => {
    setShowInput(false)
    setBgColor('white')
    setSearchText('') // Clear the search text when moving the mouse back
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value)
    // You can add your search logic here
    console.log('Searching for:', e.target.value)
  }

  return (
    <div className="container" style={{ backgroundColor: bgColor, display: 'flex' }}>
      {
        showInput ? (
          <>
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearch}
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={handleMouseLeave} // Add onMouseLeave to the input
            />
            {/* Add your search comments here */}
           
          </>
        ) : (
          <FaSearch 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )
      }
    </div>
  )
}

export default HiddenSearchBar