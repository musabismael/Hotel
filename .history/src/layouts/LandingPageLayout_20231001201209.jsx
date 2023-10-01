import { Outlet } from "react-router";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
const LandingPageLayout = () => {
  return (
    <div className=" relative bg-gradient-to-b from-sky-300 via-sky-900">
      <Header style={{ zIndex: 2 }} />
      <Sidebar style={{ zIndex: 1 }} />

      <div className="ml-64 p-4">

        <h2 className="text-2xl font-bold">Main Content</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default LandingPageLayout;
