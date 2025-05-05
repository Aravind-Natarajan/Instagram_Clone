import React from 'react'
import Story from './story'
import Posts from './Posts'

function Feed() {
  return (
    <div>
        <div className='story'><Story/></div>
        <div><Posts/></div>
    </div>
  )
}

export default Feed