// App.js (or your routing component)

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import ReservationManagement from "./pa"; // Import your new page component

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          {/* Your main content goes here */}
          <main className="p-4">
            <Switch>
              <Route exact path="/">
                <h2 className="text-2xl font-bold">Main Content</h2>
                <p>
                  Welcome to your hotel management system. Here, you can manage
                  reservations, guest check-in/check-out, room assignments, and more.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
                  velit ac turpis volutpat facilisis.
                </p>
              </Route>
              <Route path="/reservation-management">
                <ReservationManagement /> {/* Render the ReservationManagement component */}
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
