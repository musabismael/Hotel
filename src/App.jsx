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
import WelcomePage from "./pages/WelcomePage";

import CRM from "./pages/CRM"; // Import the CRM component
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/reservation_management",
        element: <ReservationManagement />,
      },
      {
        path: "/guestCheckInOut",
        element: <GuestCheckInOut />,
      },
      {
        path: "/billing_and_payment",
        element: <BillingPayment />,
      },
      {
        path: "/room_management",
        element: <RoomManagement />,
      },
      {
        path: "/housekeeping_maintenance",
        element: <HousekeepingMaintenance />,
      },
      {
        path: "/guest_services",
        element: <GuestServices />,
      }, {
        path: "/desk_operations",
        element: <FrontDeskOperations />,
      }, {
        path: "/security_control",
        element: <SecurityAccessControl />,
      },
      {
        path: "/reporting_and_analytics",
        element: <ReportingAnalytics />,
      }, {
        path: "/inventory_management",
        element: <InventoryManagement />,
      },
      {
        path: "/pos",
        element: <PointOfSale />,
      },
      {
        path: "/crm",
        element: <CRM />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
