import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import JobDetails from './components/JobDetails'
import JobLists from './components/JobLists'

const router = createBrowserRouter([
  {
    path:'/',
    element: <JobLists/>
  },
  {
    path:'/jobDetails/:position',
    element:<JobDetails/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
    <RouterProvider router={router}> </RouterProvider>
  </>
)
