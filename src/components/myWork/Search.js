import React from 'react'

const Search = () => {
  return (
    <>
      <nav className='search-nav'>
        <ul className='stack'>
          <li className='active'>All</li>
          <li>Front-end</li>
          <li>FullStack</li>
        </ul>
        <input type="search" id="search" placeholder="Search for skill" />
      </nav>
      <h2 className='projects-num'><span>1</span>Projects</h2>
    </>
  )
}

export default Search
