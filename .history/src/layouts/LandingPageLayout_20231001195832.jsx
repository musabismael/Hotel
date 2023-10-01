import { Outlet } from "react-router";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
const LandingPageLayout = () => {
  return (
    <div className="flex bg-gradient-to-b from-sky-300 via-sky-900">
      <Sidebar />
      <Header />

      <div className="flex-1">
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LandingPageLayout;
