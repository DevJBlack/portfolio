import React from 'react'
import { Link } from 'react-router-dom'
import frontPageTesla from '../Assests/HOMETESLAPROJECT.PNG'
import dashBoard from '../Assests/Dashboard.png'
import './Projects.scss'

const Projects = () => {

  

  return (
    <div className='projectContainer'>
      <h2>Projects</h2>
      <div className='teslaProject'>
        <p> Tesla Clone </p>
        <img width='250' src={frontPageTesla} alt='teslaClone'/>
          <div>
            <Link to='/teslaclone'><button>View Project</button></Link>
          </div>
      </div>
      <div className='btlsrvProject'>
        <p> Btlsrv </p>
        <img width='250' src={dashBoard} alt='dashBoard'/>
        <div>
          <Link to='/btlsrv'><button>View Project</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Projects