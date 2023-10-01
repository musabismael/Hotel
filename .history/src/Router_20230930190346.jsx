// Router.js
import { Routes, Route } from "react-router-dom";
import ReservationManagement from "./pages/ReservationManagement";
import GuestCheckInOut from "./pages/GuestCheckInOut";

import About from "./About";
import Contact from "./Contact";

function Router() {
  return (
    <Routes>
      <Route path="/" >
        <Route path="/reservationManagement" element={<ReservationManagement />} />
        <Route path="/guestCheckInOut" element={<GuestCheckInOut />} />
      </Route>
    </Routes>
  );
}

export default Router;
