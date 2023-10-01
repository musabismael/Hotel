import { Outlet } from "react-router";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
const LandingPageLayout = () => {
  return (
    <div className=" relative bg-gradient-to-b from-sky-300 via-sky-900">
      <Header style={{ zIndex: 2 }} />
      <Sidebar style={{ zIndex: 1 }} />
      <div className="flex-1">
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <div className="ml-64 p-4"> {/* Adjust ml-64 to match the sidebar width */}
        {/* Your main content goes here */}
        <h2 className="text-2xl font-bold">Main Content</h2>
       
      </div>
    </div>
  );
};

export default LandingPageLayout;