import React from 'react'
import './Skills.scss'
import javascript from '../Assests/javascript.png'
import html5 from '../Assests/html5.png'
import postman from '../Assests/postman.png'
import node from '../Assests/node.png'
import css from '../Assests/css-3.png'
import react from '../Assests/React-icon.png'
import redux from '../Assests/redux.png'
import Sass from '../Assests/Sass-logo.svg'

const Skills = () => {
  return (
    <div className='skillsHome'>
        <div className='title'>
          <h1>Skills</h1>
        </div>
        <div className='imageBox'>
          <div className='imgBox javascript'>
            <p>Javascript</p>
            <img width='100' src={javascript} alt='javascript'/>
          </div>
          <div className='html'>
            <p>HTML</p>
            <img width='100' src={html5} alt='html5'/>
          </div>
          <div className='css'>
            <p>CSS</p>
            <img width='100' src={css} alt='css'/>
          </div>
          <div className='react'>
            <p>React</p>
            <img width='100' src={react} alt='react'/>
          </div>
          <div className='redux'>
            <p>Redux</p>
            <img width='100' src={redux} alt='redux'/>
          </div>
          <div className='node'>
            <p>Node</p>
            <img width='100' src={node} alt='node'/>
          </div>
          <div className='postman'>
            <p>Postman</p>
            <img width='100' src={postman} alt='postman'/>    
          </div>
          <div className='sass'>
            <p>Sass</p>
            <img width='125' src={Sass} alt='Sass'/>    
          </div>
        </div>
    </div>
  )
}

export default Skills