import { Outlet } from "react-router";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
const LandingPageLayout = () => {
  return (
    <div className=" relative bg-gradient-to-b from-sky-300 via-sky-900">
      <Header  />
      <Sidebar />
        <main className="p-4">
          <Outlet />
        </main>
    </div>
  );
};

export default LandingPageLayout;
