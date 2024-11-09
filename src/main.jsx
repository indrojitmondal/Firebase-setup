import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layouts/Main.jsx';
import Home from './components/Home/Home.jsx';
import './index.css'
import Login from './components/Login/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
         {
            path: '/',
            element: <Home></Home>
         },
         {
          path: 'login',
          element: <Login></Login>
       }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
