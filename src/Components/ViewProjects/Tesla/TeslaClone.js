import React, { useState, useEffect } from 'react'
import './TeslaClone.scss'
import ProjectHeader from '../ProjectHeader/ProjectHeader'
import signInTesla from '../../Assests/SIGNINTESLA.PNG'
import registerTesla from '../../Assests/REGISTERTESLA.PNG'
import powerTesla from '../../Assests/POWERTESLA.PNG'
import homeTeslaProject from '../../Assests/HOMETESLAPROJECT.PNG'
import './TeslaClone.scss'

import { Gallery, GalleryImage } from 'react-gesture-gallery'


const TeslaClone = () => {
  const [index, setIndex] = useState(0);
  const [signIn] = useState({signInTesla}) 
  const [register] = useState({registerTesla})
  const [energy] = useState({powerTesla})
  const [home] = useState({homeTeslaProject})
  const title = 'Tesla Clone'
  const images = [
    {
      src:
        home.homeTeslaProject
    },
    {
      src:
        energy.powerTesla
    },
    {
      src:
        signIn.signInTesla
    },
    {
      src: 
        register.registerTesla
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (index === 3) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1)
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index])

  
  
  return (
    <div className='TeslaClonePage'>
      <div>
        <ProjectHeader title={title}/>
      </div>
      <div className='galleryHolder'>
        <div className='galleryButtonHolder'>
          <a href='https://github.com/DevJBlack/Personal-project' rel="noopener noreferrer" target="_blank"> <button>GitHub</button></a>
         
         <a href='http://167.71.147.48:4027/#/' rel="noopener noreferrer" target="_blank"><button>Live Site</button></a>
        </div>
          <Gallery
            index={index}
            onRequestChange={ i => {
              setIndex(i)
            }}
          >
            { images.map(map => (
              <GalleryImage objectFit='contain' key={map.src} src={map.src} />
            ))}
          </Gallery>
      </div>
    </div>
  )
}

export default TeslaClone