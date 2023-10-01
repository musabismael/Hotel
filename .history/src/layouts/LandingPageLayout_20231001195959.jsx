import { Outlet } from "react-router";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
const LandingPageLayout = () => {
  return (
    <div className="relative bg-gradient-to-b from-sky-300 via-sky-900">
      <div className="relative">
      <Header style={{ zIndex: 2 }} /> {/* Header component with higher z-index */}
      <Sidebar style={{ zIndex: 1 }} /> {/* Sidebar component with lower z-index */}
      {/* Your main content goes here */}
    </div>
      <div className="flex-1">
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LandingPageLayout;
