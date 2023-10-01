import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import LandingPageLayout from './layouts/LandingPageLayout'
import ReservationManagement from './pages/ReservationManagement'
import GuestCheckInOut from './pages/GuestCheckInOut'

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
        path: '/guestCheckInOut',
        element: <GuestCheckInOut />,
      },
    ],
  },
])
<div className="flex bg-gradient-to-r from-sky-900 via-sky-500 to-sky-700">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
const App = () => <RouterProvider router={router} />
export default App