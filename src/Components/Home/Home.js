import React from 'react'
import editedColor from '../Assests/editedColor.jpg'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import NavBar from '../NavBar/NavBar'
import Projects from '../Projects/Projects'
import './Home.scss'

const Home = () => {
  return (
    <div id='Home'>
      <div className='home-pic'>
        <NavBar/>
        <div className='name-box'>
          <h1 className='name-text'> Devin Black</h1>
          <p className='pText'>Front-End Developer</p>
          <div className='portfolio'>
            <img src={editedColor} alt='dev' />
          </div>
        </div>
      </div>

      <div className='aboutMe' id='Me'>
        <AboutMe/>
      </div>
      <div className='skills' id='Skills'>
        <Skills/>
      </div>
      <div className='projects' id='Projects'>
        <Projects/>
      </div>
        
    </div>
  )
}

export default Home
