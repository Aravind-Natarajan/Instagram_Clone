import React, { useEffect, useState } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
function Viewstory() {

  const {id,tot}=useParams();  
  const [stories,setStories] = useState(null)
  const navicate=useNavigate()

  useEffect(()=>{
    fetch(`http://localhost:3000/stories/${id}`)
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{setStories(data)})
    .catch((err)=>{
        console.log(err)
    })
  },[id])
  if(id > tot || id<=0){
    navicate('/')
  }

  return (
   <>
    
    {stories ? 
        <div className="story_page">
            <div className="story_head m-5 d-flex">
                <p className='p-2' onClick={()=>{navicate('/')}}><i className="bi bi-arrow-left-circle-fill"></i></p>
                <img src={stories.user.profile_pic} className='story-dp rounded-circle' alt="" />
                <p className='p-2'>{stories.user.username}</p>
            </div>
            <div key={stories.id} className='d-flex justify-content-center align-items-center' >
                <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-circle-fill"></i></Link>
                <div>
                <img className='vh-50 p-3' src={stories.image} alt="Story" />
                </div>
                <Link  to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-circle-fill"></i></Link>
            </div>
        </div>
        :<div>
         <h1>Loading.....</h1>   
        </div>
    }
   </>
  )
}

export default Viewstory