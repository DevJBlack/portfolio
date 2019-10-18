import React from 'react'
import './Contact.scss'

const Contact = () => {

  return(
    <div>
      <div className='titlePage'>
        <div className='titleContainer'> 
        <div className='titleContact'>
          <h2>Contact Me</h2>
        </div>
          <label className='phoneContact'>Phone: <span>385-535-5288</span></label>
          <label className='emailContact'>Email:<span>Devinjamesblack@gmail.com</span></label>
          <label className='linkedInContact'> LinkedIn:<a href='https://www.linkedin.com/in/devin-black/' rel='noopener noreferrer' target='_blank'><span>https://www.linkedin.com/in/devin-black</span></a></label>
          <label className='gitHubContact'> GitHub:<a href='https://github.com/DevJBlack' rel='noopener noreferrer' target='_blank'><span>https://github.com/DevJBlack</span></a></label>
        </div>
      </div>
    </div>
  )
}

export default Contact