import React from 'react'
import './Skills.scss'
import javascript from '../Assests/javascript.png'
import html5 from '../Assests/html5.png'
import postman from '../Assests/postman.png'
import node from '../Assests/node.png'
import css from '../Assests/css-3.png'
import react from '../Assests/React-icon.png'
import redux from '../Assests/redux.png'

const Skills = () => {
  return (
    <div>
      <div className='title'>
        <h1>Skills</h1>
      </div>
      <div>
        <img width='100' src={javascript} alt='javascript'/>
        <img width='100' src={html5} alt='html5'/>
        <img width='100' src={css} alt='css'/>
        <img width='100' src={react} alt='react'/>
        <img width='100' src={redux} alt='redux'/>
        <img width='100' src={node} alt='node'/>
        <img width='100' src={postman} alt='postman'/>    
      </div>
    </div>
  )
}

export default Skills