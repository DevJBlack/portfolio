import React from 'react'
import './NavBar.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => {


  return (
    <div>
      <nav className="navigation">
          <AnchorLink offset='10'href='#Me'><p id='skills'>About Me</p></AnchorLink>
          <AnchorLink offset='10'href='#Skills'><p id='skills'>Skills</p></AnchorLink>
      </nav>
    </div>
  )
}

export default NavBar