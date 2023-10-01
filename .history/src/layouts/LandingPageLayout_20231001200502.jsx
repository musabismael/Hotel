import { Outlet } from "react-router";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
const LandingPageLayout = () => {
  return (
    <div className=" relative bg-gradient-to-b from-sky-300 via-sky-900">
      <Header style={{ zIndex: 2 }} />
      <Sidebar style={{ zIndex: 1 }} />
   
    </div>
  );
};

export default LandingPageLayout;
