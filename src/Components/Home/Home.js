import React from 'react'
import editedColor from '../Assests/editedColor.jpg'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import NavBar from '../NavBar/NavBar'
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
        
    </div>
  )
}

export default Home

// Going to have landing page, about me, skills, and Contact Info all on this page to view and display.
// But we will have all of the sections in the menu, but the only section that will go to a new a page will be projects, we will add animations to that page and a Carousel for the projects.

// Need to figure out how to make the menu page display and pop up on the screen so we can interact with it.

// Once we click on a link have it scroll down to the correct section of the page. 

// Solution it is the <!-- links to an element on the same page with an id= of "attr-href" -->
/* <a href="#attr-href">
Description of Same-Page Links
</a> */
// Need to target the id of the link so it can go there