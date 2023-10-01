import { Outlet } from "react-router";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

const LandingPageLayout = () => {
  return (
    <div className="flex bg-gradient-to-r from-sky-900 via-sky-500 to-sky-700">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LandingPageLayout;
