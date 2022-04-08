import React from 'react'
import {MdSearch} from 'react-icons/md'
const Search = ({ handleSearchNote }) => {
  return (
    <div className='search'>
      <MdSearch className='search-icons'
      size='1.3rem'/>
      <input type='text' 
      onChange={(e) => handleSearchNote(e.target.value)}
      placeholder="Type to Search..." />
    </div>
  )
}

export default Search
