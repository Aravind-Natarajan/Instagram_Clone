import React from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Suggestions from './components/Suggestions'

function App() {
  return (
    <React.Fragment>
      <div className='d-flex vh-100'>
        <div className='w-20'><Sidebar/></div>
        <div className='w-50 '><Feed/></div>
        <div className='w-30'><Suggestions/></div>
      </div>
    </React.Fragment>
  )
}
// w-25 w-50 w-75 w-100
export default App