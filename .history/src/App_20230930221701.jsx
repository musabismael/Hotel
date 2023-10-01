import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import LandingPageLayout from "./layouts/LandingPageLayout";
import ReservationManagement from "./pages/ReservationManagement";
import GuestCheckInOut from "./pages/GuestCheckInOut";
import RoomManagement from "./pages/RoomManagement";
import BillingPayment from "./pages/BillingPayment";
import HousekeepingMaintenance from "./pages/HousekeepingMaintenance";
import GuestServices from "./pages/GuestServices";
import FrontDeskOperations from "./pages/FrontDeskOperations";
import InventoryManagement from "./pages/InventoryManagement";
import ReportingAnalytics from "./pages/ReportingAnalytics";
import SecurityAccessControl from "./pages/SecurityAccessControl";
import PointOfSale from "./pages/PointOfSale";
import CRM from "./CRM"; // Import the CRM component
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        path: "/reservation_management",
        element: <ReservationManagement />,
      },
      {
        path: "/guestCheckInOut",
        element: <GuestCheckInOut />,
      },
      {
        path: "/roomManagement",
        element: <RoomManagement />,
      },
      {
        path: "/guestCheckInOut",
        element: <GuestCheckInOut />,
      },
      {
        path: "/guestCheckInOut",
        element: <GuestCheckInOut />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
