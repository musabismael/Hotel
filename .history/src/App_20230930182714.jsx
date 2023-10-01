import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import ReservationManagement from "./pages/ReservationManagement"; // Import your new page component
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex bg-gradient-to-r from-sky-900 via-sky-500 to-sky-700">
        <Sidebar />

        <div className="flex-1">
          <Header />
          <main className="p-4">
            <Switch>
              <Route exact path="/">
                <h2 className="text-2xl font-bold">Main Content</h2>
                <p>
                  Welcome to your hotel management system. Here, you can manage
                  reservations, guest check-in/check-out, room assignments, and
                  more.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  nec velit ac turpis volutpat facilisis.
                </p>
              </Route>
              <Route path="/reservation-management" element={<ReservationManagement />} />

              <Route path="/reservation-management" element={<ReservationManagement/>}>
                <ReservationManagement />{" "}
                {/* Render the ReservationManagement component */}
              </Route>
            </Switch>
          </main>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
