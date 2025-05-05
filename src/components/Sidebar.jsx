import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navicate=useNavigate()
  return (
    <div className='m-3 position-fixed'>
        <div className='d-flex flex-column gap-1'>
            <img src="src\assets\Instagram_text.png" alt="Text" className='logo-text'/>
            <div className='sidebar-menu' onClick={()=>{navicate('/')}}><i className="bi bi-house-door-fill"></i>Home</div>
            <div className='sidebar-menu'><i className="bi bi-search"></i>Search</div>
            <div className='sidebar-menu'><i className="bi bi-compass"></i>Explore</div>
            <div className='sidebar-menu'><i className="bi bi-file-earmark-play-fill"></i>Reels</div>
            <div className='sidebar-menu'><i className="bi bi-chat-dots"></i>Messages</div>
            <div className='sidebar-menu'><i className="bi bi-heart"></i>Notifications</div>
            <div className='sidebar-menu'><i className="bi bi-plus-square"></i>Create</div>
            <div className='sidebar-menu' onClick={()=>{navicate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
        </div>
        <div className='d-flex flex-column gap-1 position-fixed bottom-0 mb-3'>
            <div className='sidebar-menu'><i className="bi bi-threads"></i>Threads</div>
            <div className='sidebar-menu'><i className="bi bi-list"></i>More</div>
        </div>
    </div>
  )
}

export default Sidebar