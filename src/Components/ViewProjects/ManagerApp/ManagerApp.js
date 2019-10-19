import React, { useState, useEffect } from 'react'
import './ManagerApp.scss'
import ProjectHeader from '../ProjectHeader/ProjectHeader'
import ManagerAppHome from '../../Assests/ManagerApp/Home.PNG'
import ManagerAppEdit from '../../Assests/ManagerApp/Edit.PNG'
import ManagerAppLinkedIn from '../../Assests/ManagerApp/LinkedIn.PNG'
import { Gallery, GalleryImage } from 'react-gesture-gallery'
const ManagerApp = () => {
  const [index, setIndex] = useState(0)
  const [appHome] = useState({ManagerAppHome})
  const [appEdit] = useState({ManagerAppEdit})
  const [appLinkedIn] = useState({ManagerAppLinkedIn})
  const images = [
    {
      src:
        appHome.ManagerAppHome
    },
    {
      src:
        appEdit.ManagerAppEdit
    },
    {
      src:
        appLinkedIn.ManagerAppLinkedIn 
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1)
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index])

  const title = 'ManagerApp'
  return (
    <div className='managerPage'>
      <div>
        <ProjectHeader title={title}/>
      </div>
      <div className='galleryHolder'>
        <div className='galleryButtonHolder'>
          <a href='https://github.com/DevJBlack/ManagerApp' rel="noopener noreferrer" target="_blank"> <button>GitHub</button></a>
         
    
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
      <div className='managerText'>
        <h1>Information:</h1>
        <p>This app is perfect</p>
      </div>
    </div>
  )
}

export default ManagerApp