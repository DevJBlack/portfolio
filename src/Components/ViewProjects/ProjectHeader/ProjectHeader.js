import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectHeader.scss'

const ProjectHeader = (props) => {
  console.log(props.title)
  return (
    <div className='headerContainer'>
      <Link to='/'><header className='header'>{props.title}</header></Link>
    </div>
  )
}

export default ProjectHeader