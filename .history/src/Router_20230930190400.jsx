// Router.js
import { Routes, Route } from "react-router-dom";
import ReservationManagement from "./pages/ReservationManagement";
import GuestCheckInOut from "./pages/GuestCheckInOut";


function Router() {
  return (
    <Routes>
      <Route path="/" >
        <Route path="/reservation-Management" element={<ReservationManagement />} />
        <Route path="/guestCheckInOut" element={<GuestCheckInOut />} />
      </Route>
    </Routes>
  );
}

export default Router;
