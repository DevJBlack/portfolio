import React from 'react'
import editedColor from '../Assests/editedColor.jpg'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import NavBar from '../NavBar/NavBar'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import './Home.scss'

const Home = () => {
  return (
    <div className='homePage' id='Home'>
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

      <div className='tableContainer'>
        <div className='aboutMe' id='Me'>
          <AboutMe/>
        </div>
        <div className='skillsPage' id='Skills'>
          <Skills/>
        </div>
        <div className='projects' id='Projects'>
          <Projects/>
        </div>
        <div className='contactMe' id='Contact'>
          <Contact/>
        </div>
      </div>

    </div>
  )
}

export default Home
