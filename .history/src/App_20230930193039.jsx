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
        path: '/reservation_management',
        element: <ReservationManagement />,
      },
      {
        path: '/AboutUs',
        element: <GuestCheckInOut />,
      },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
