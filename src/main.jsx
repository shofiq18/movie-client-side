import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AuthProvider from './components/Provider/AuthProvider';
import Error from './components/Error';
import AddMovie from './components/private/AddMovie';
import AllMovies from './components/public/AllMovies';
import MyFavorites from './components/private/MyFavorites';
import ContactUs from './components/public/ContactUs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login', 
        element: <Login></Login>
      },
      {
        path: '/register', 
        element: <Register></Register>
      }, 
      {
        path: '/add', 
        element: <AddMovie></AddMovie>
      }, 
      {
        path: '/movies', 
        element: <AllMovies></AllMovies>
      }, 
      {
        path: '/favorites', 
        element: <MyFavorites></MyFavorites>
      }, 
      {
        path: '/contact', 
        element: <ContactUs></ContactUs>
      }


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
