import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import LandingPageLayout from "./layouts/LandingPageLayout";
import ReservationManagement from "./pages/ReservationManagement";
import GuestCheckInOut from "./pages/GuestCheckInOut";
import RoomManagement from "./pages/RoomManagement";
import BillingPayment from "./pages/BillingPayment";
import HousekeepingMaintenance from "./HousekeepingMaintenance";
import GuestServices from "./GuestServices";
import FrontDeskOperations from "./FrontDeskOperations";
import InventoryManagement from "./InventoryManagement";
import ReportingAnalytics from "./ReportingAnalytics";
import SecurityAccessControl from "./SecurityAccessControl";
import PointOfSale from "./PointOfSale";
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
        path: "/guestCheckInOut",
        element: <GuestCheckInOut />,
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
