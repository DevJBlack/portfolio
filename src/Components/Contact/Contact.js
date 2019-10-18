import React from 'react'
import './Contact.scss'

const Contact = () => {

  return(
    <div>
      <div className='titlePage'>
        <div className='titleContact'>
          <h2>Contact Me</h2>
        </div>
        {/* <div className='titleContainer'>  */}
          <label className='phoneContact'>Phone: 385-535-5288 </label>
          <label className='emailContact'>Email: Devinjamesblack@gmail.com </label>
          <label className='linkedInContact'> LinkedIn:<a href='https://www.linkedin.com/in/devin-black/' rel='noopener noreferrer' target='_blank'> https://www.linkedin.com/in/devin-black/</a></label>
          <label className='nameContact'>Phone: 385-535-5288 </label>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Contact