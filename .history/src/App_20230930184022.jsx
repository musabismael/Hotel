import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import ReservationManagement from "./pages/ReservationManagement"; // Import your new page component
import GuestCheckInOut from "./pages/GuestCheckInOut"; // Import your new page component

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex bg-gradient-to-r from-sky-900 via-sky-500 to-sky-700">
        <Sidebar />

        <div className="flex-1">
          <Header />
          <main className="p-4">
            <Routes>
              <Route exact path="/" />

              <Route
                path="/reservation-management"
                element={<ReservationManagement />}
              />
              <Route path="/guestCheckInOut" element={<GuestCheckInOut />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
