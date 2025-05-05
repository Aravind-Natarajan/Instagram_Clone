import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Story() {
  const [story, SetStory] = useState([])
  const [profile,setProfile]=useState(null)
  const navicate=useNavigate()
  let tot=0
  useEffect(() => {
    fetch('http://localhost:3000/stories')
      .then((response) => {
        return response.json()
      })
      .then((data) => { SetStory(data) })
      .catch((err) => {
        console.log(err)
      })

      axios.get("http://localhost:3000/profiles")
      .then(data=>setProfile(data.data))
      .catch((err)=>{console.log})
  }, [])

  return (
    <div className='story d-flex position-fixed' style={{backgroundColor:"white"}}>
      <div className='d-none'>
        {tot=story.length}
      </div>
      {
        profile ? (
          <div key={profile.id} className='mx-1 mt-3'>
            <div className='gradient-border'>
            {/* <img src={profile.profile_pic} alt="Profile" className='story-dp rounded-circle'/> */}
            <h1 style={{color:"white"}}>+</h1>
            </div>
            <p className='text-truncate' style={{width:"50px"}}>{profile.username}</p>
          </div>
        ):(
          <div><i className="bi bi-plus-square"></i></div>
        )
      }
      {story.length > 0 ? (
        story.map((s) => (
          <div key={s.id} className='mx-1 mt-3' onClick={()=>{navicate(`/story/${s.id}/${tot}`)}}>
            <div className='gradient-border'>
            <img src={s.user.profile_pic} alt="Profile" className='story-dp rounded-circle'/>
            </div>
            <p className='text-truncate' style={{width:"50px"}}>{s.user.username}</p>
          </div>
        ))) : (
        <p>loading.....</p>
      )}
    </div>
  )
}

export default Story