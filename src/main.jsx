import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import navbar from './navbar';
import Books from './Books';
import BookDetails from './BookDetails';
import quotes from './quotes';


const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <navbar />,
      },
  
      { 
        path: '/book/:name',
        element: <book />
    
      },
  
      { 
        path: '/bookdetails',
        element: <bookdetails />
    
      },
  
      { 
        path: '/quotes',
        element: <quotes />
     
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>
)
