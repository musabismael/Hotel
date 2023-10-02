import { Outlet } from "react-router";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
const LandingPageLayout = () => {
  return (
    <div className=" relative bg-gradient-to-b bg-gray">
      <Header style={{ zIndex: 2 }} />
      <Sidebar style={{ zIndex: 1 }} />
      <div className="ml-80 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default LandingPageLayout;
