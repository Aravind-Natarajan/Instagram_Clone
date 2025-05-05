import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Suggestions() {
  const [profile, setProfile] = useState(null)
  const [suggest, setSuggest] = useState([])
  const navicate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3000/profiles')
      .then((data) => {
        return data.json()
      })
      .then((val) => setProfile(val))
      .catch((err) => {
        console.log(err)
      })

    fetch('http://localhost:3000/suggestions')
      .then((response) => {
        return response.json()
      })
      .then((data) => setSuggest(data))
      .catch((err) => {
        console.log(err)
      })
  }, [])
  

  const followerAdd = async(id,user,profilepic)=>{
      axios.post('http://localhost:3000/followers',
        {"id":id,
          "username":user,
          "profile_pic":profilepic
        })
        .then(alert("Followed...👤✅"))
        .catch((err)=>{console.log(err)})
  }

  return (
    <div className='position-fixed'>
      <div className="suggestions w-100 m-4">
        {profile ?
          <div className='d-flex' style={{cursor:"pointer"}} onClick={()=>{navicate('/profile')}}>
            <img className='dp rounded-circle' src={profile.profile_pic} alt="Profile" />
            <h6 className='mt-2'>{profile.username}</h6>
            <small className='ms-auto text-primary mt-2'>Switch</small>
          </div> :
          <p>loading....</p>
        }
        <div className='d-flex '>
          <p>Suggested for you</p>
          <small className='see-all ms-auto' onClick={()=>{navicate('/suggestion_list')}}><b>See All</b></small>
        </div>


        {
            suggest.map((sug) => (
              <div key={sug.id}>
                <div className='d-flex'>
                  <img className='dp rounded-circle' src={sug.profile_pic} alt="Profile" />
                  <h6 className='mt-2 text-truncate' style={{width:"100px"}}>{sug.username}</h6>
                  <small className='ms-auto mt-1 text-primary' style={{cursor:"pointer"}} onClick={()=>{followerAdd(sug.id,sug.username,sug.profile_pic)}}>Follow</small>
                </div>
              </div>
            ))}



      </div>
    </div>
  )
}

export default Suggestions