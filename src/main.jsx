import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Viewstory from './components/Viewstory.jsx'
import Profile from './components/Profile.jsx'
import Sug_list from './components/Sug_list.jsx'


const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/story/:id/:tot",
      element:<Viewstory/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/suggestion_list",
      element:<Sug_list/>
    },
  ]
)
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
