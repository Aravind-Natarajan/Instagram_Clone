import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


function Sug_list() {
    const navicate = useNavigate()
     const [suggest, setSuggest] = useState([])
     useEffect(() => {
     
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
        <div className='m-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <p className='p-2' onClick={() => { navicate('/') }}><i className="bi bi-arrow-left-circle-fill"></i></p>
                <img src="src\assets\Instagram_text.png" alt="Text" className='logo-text' />
            </div>
            <h3>Suggested for you</h3>

            <div className="d-flex my-3 justify-content-evenly flex-wrap ">
            {
                suggest.length > 0 ?
                
                    suggest.map((sug) => (
                        
                            <div key={sug.id} className='follow-card d-flex flex-column align-items-center mt-2'>
                                <img src={sug.profile_pic} alt="follow" className='follow-dp rounded-circle' />
                                <small  className='text-truncate' style={{width:"80px"}}>{sug.username}</small>
                                <button className='btn btn-primary mt-3' style={{fontSize:"12px",padding:"5px 20px"}} onClick={()=>{followerAdd(sug.id,sug.username,sug.profile_pic)}}>Follow</button>
                            </div>
                        
                    )):
                    <div>
                        Loading followers.....
                    </div>
            }
            </div> 

        </div>
    )
}

export default Sug_list


