import React, { useState } from 'react'
import './NavBar.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => {
 const [edit, setEdit] = useState(true)

 const displayEdit = () => {
    if (edit === true) { 
      return(setEdit(false))
    } else {
      return (
        setEdit(true)
      )
    }
 }

  return (
    <div>
      <nav className="navigation">
        { edit ?  
        <div>
          <label onClick={() => displayEdit(false)} htmlFor="toggle" className="label">&#9776;</label>
          <input type="checkbox" id="toggle"/>
        </div> 
        :
        <div className='menuPage'>
            <label onClick={() => displayEdit(true)}>X</label>
          <div className='menu'>
            <AnchorLink offset='10'href='#Me'><p id='skills'>About Me</p></AnchorLink>
            <AnchorLink offset='10'href='#Skills'><p id='skills'>Skills</p></AnchorLink>
          </div>
        </div>
      }
      </nav>
    </div>
  )
}

export default NavBar