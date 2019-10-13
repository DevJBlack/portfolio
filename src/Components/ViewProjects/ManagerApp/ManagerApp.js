import React from 'react'
import './ManagerApp.scss'
import ProjectHeader from '../ProjectHeader/ProjectHeader'

const ManagerApp = () => {
  const title = 'ManagerApp'
  return (
    <div>
      <div>
        <ProjectHeader title={title}/>
      </div>
    </div>
  )
}

export default ManagerApp