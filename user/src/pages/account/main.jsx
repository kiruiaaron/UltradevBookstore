import React from 'react'
import Topbar from '../../components/topbar/topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/feed'
import './main.css'

const Main = () => {
  return (
    <div>
        <Topbar/>
        <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        </div>
    </div>
  )
}

export default Main