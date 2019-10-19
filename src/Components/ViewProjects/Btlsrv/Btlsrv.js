import React, { useState, useEffect } from 'react'
import './Btlsrv.scss'
import ProjectHeader from '../ProjectHeader/ProjectHeader'
import AddMap from '../../Assests/Btlsrv/AddMap.png'
import Dashboard from '../../Assests/Btlsrv/Dashboard.png'
import Gameplay from '../../Assests/Btlsrv/Gameplay.png'

import { Gallery, GalleryImage } from 'react-gesture-gallery'

const Btlsrv = () => {
  const [index, setIndex] = useState(0);
  const [addMap] = useState({AddMap})
  const [dashBoard] = useState({Dashboard})
  const [gamePlay] = useState({Gameplay})
  const title = 'Btlsrv'
  const images = [
    {
      src:
      dashBoard.Dashboard
    },
    {
      src:
      addMap.AddMap
    },
    {
      src:
      gamePlay.Gameplay
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

  
  return (
    <div className='btlsrvPage'>
      <div>
        <ProjectHeader title={title}/>
      </div>
      <div className='galleryHolder'>
        <div className='galleryButtonHolder'>
          <a href='https://github.com/btlsrv/btlsrv' rel="noopener noreferrer" target="_blank"> <button>GitHub</button></a>
         
         <a href='https://btlsrv.rileyhatch.com/#/' rel="noopener noreferrer" target="_blank"><button>Live Site</button></a>
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
      <div className='btlsrvText'>
        <h1>Information:</h1>
        <p>This project is a fun game that resembles the classic battle ship game. You can create multiple  maps, and play with friends. This App was built with React, React-Redux, Sockets, Html Drag and Drop, Sass, Javascript, and Chart Js.</p>
      </div>
    </div>
  )
}

export default Btlsrv