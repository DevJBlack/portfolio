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
        <div className='labelHolder'>
          <label onClick={() => displayEdit(false)} htmlFor="toggle" className="label">&#9776;</label>
          <input type="checkbox" id="toggle"/>
        </div> 
        :
        <div className='menuPage'>
            <label className='closeTab' onClick={() => displayEdit(true)}>X</label>
          <div className='menu'>
            <AnchorLink onClick={() => displayEdit(true)} href='#Home'><p id='skills'>Home</p></AnchorLink>
            <AnchorLink onClick={() => displayEdit(true)} href='#Me'><p id='skills'>About Me</p></AnchorLink>
            <AnchorLink onClick={() => displayEdit(true)} href='#Skills'><p id='skills'>Skills</p></AnchorLink>
            <AnchorLink onClick={() => displayEdit(true)} href='#Projects'><p id='skills'>Projects</p></AnchorLink>
            <AnchorLink onClick={() => displayEdit(true)} href='#Contact'><p id='skills'>Contact Me</p></AnchorLink>
          </div>
        </div>
      }
      </nav>
    </div>
  )
}

export default NavBar