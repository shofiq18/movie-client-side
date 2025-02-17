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
import Details from './components/private/Details';
import Feature from './components/public/Feature';
import UpdateMovie from './components/private/UpdateMovie';
import PrivateRoute from './components/PrivateRoute';




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
        element: <PrivateRoute>
          <AddMovie></AddMovie>
        </PrivateRoute>
      },
      {
        path: '/movies',
        element: <AllMovies></AllMovies>,
        loader: () => fetch('https://movie-portal-server-sigma.vercel.app/movie')
      },
      {
        path: '/favorites',
        element: <PrivateRoute>
          <MyFavorites></MyFavorites>
        </PrivateRoute>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/details/:id',
        element: 
          <Details></Details>,
        loader: ({ params }) => fetch(`https://movie-portal-server-sigma.vercel.app/movie/${params.id}`)
      },
      {
        path: '/feature',
        element: <Feature></Feature>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute>
          <UpdateMovie></UpdateMovie>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://movie-portal-server-sigma.vercel.app/movie/${params.id}`)
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
