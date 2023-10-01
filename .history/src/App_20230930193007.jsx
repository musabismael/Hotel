import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import LandingPageLayout from './layouts/LandingPageLayout'
import ReservationManagement from './pages/ReservationManagement'
import GuestCheckInOut from './pages/GuestCheckInOut'
import './style/All.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/AboutUs',
        element: <AboutUs />,
      },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
