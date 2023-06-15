import React from 'react'

function SearchBar() {
  return (
    <div>
        <h2>Search</h2>
        <div>
            <input className='search' placeholder="Search Businesses" />
            <input className='location' placeholder="Where?" />
            <input className='go' type='submit' value="Let's Go" />
            </div>
    </div>
  )
}

export default SearchBar