import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const [profile, setProfile] = useState(null)
    const [followers, setFollowers] = useState([])
    const [unfollow,setUnfollow]=useState(true)
    const navicate= useNavigate()

    useEffect(() => {
        // fetch('http://localhost:3000/profiles')
        // .then(response=>{return response.json()})
        // .then(data=>setProfile(data))
        axios.get('http://localhost:3000/profiles')
            .then((data) => setProfile(data.data))
            .catch((err) => console.log(err))

        axios.get('http://localhost:3000/followers')
            .then((data) => setFollowers(data.data))
            .catch((err) => console.log(err))
    }, [unfollow])

    const handleChange = (e) => {
        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleupdate = async () => {
        axios.put('http://localhost:3000/profiles', profile)
            .then(alert("Profile updated successfully ✅"))
            .catch((err) => console.log(err))
    }

    const handleDelete = async (id,user,profilepic) => {
        axios.delete(`http://localhost:3000/followers/${id}`)
            .then(alert("Un followed...🚫👤"))
            .then(setUnfollow(!unfollow))
            .catch((err) => console.log(err))
        
            axios.post('http://localhost:3000/suggestions',
                {"id":id,
                  "username":user,
                  "profile_pic":profilepic
                })
                .then(console.log(""))
                .catch((err)=>{console.log(err)})
    }

    return (
        <div className='m-4'>
            <p className='p-2' onClick={()=>{navicate('/')}}><i className="bi bi-arrow-left-circle-fill"></i></p>
            {profile ? <div>
                <div className='gradient-profile'>
                <img src={profile.profile_pic} alt="Profile" className='profile rounded-circle' />
                </div>
                <h5>{profile.username}</h5>


                <input type="text"
                    className="form-control my-4"
                    value={profile.username}
                    name='username'
                    onChange={handleChange}
                />
                <input type="text"
                    className="form-control my-4"
                    value={profile.profile_pic}
                    name='profile_pic'
                    onChange={handleChange}
                />
                <button className='btn btn-primary' onClick={handleupdate}>
                    Update
                </button>
            </div> :
                <div>
                    Loading profile.......
                </div>}
                <div className="d-flex my-3 justify-content-evenly flex-wrap ">
            {
                followers.length > 0 ?
                
                    followers.map((follow) => (
                        
                            <div key={follow.id} className='follow-card d-flex flex-column align-items-center mt-2'>
                                <img src={follow.profile_pic} alt="follow" className='follow-dp rounded-circle' />
                                <small  className='text-truncate' style={{width:"80px"}}>{follow.username}</small>
                                <button className='btn btn-outline-danger mt-3' style={{fontSize:"12px",padding:"5px 20px"}} onClick={()=>{handleDelete(follow.id,follow.username,follow.profile_pic)}}>un follow</button>
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

export default Profile