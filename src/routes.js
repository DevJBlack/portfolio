import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import TeslaClone from './Components/ViewProjects/Tesla/TeslaClone'
import Btlsrv from './Components/ViewProjects/Btlsrv/Btlsrv'
import ManagerApp from './Components/ViewProjects/ManagerApp/ManagerApp'

export default (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/teslaclone' component={TeslaClone}/>
    <Route path='managerapp' component={ManagerApp}/>
    <Route path='/btlsrv' component={Btlsrv}/>
  </Switch>
)