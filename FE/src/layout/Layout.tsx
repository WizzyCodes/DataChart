import { Outlet } from "react-router-dom";
import StaticComp from "../static/StaticComp";

const Layout = () => {
  return (
    <div className="">
      <Outlet />

      <StaticComp />
    </div>
  );
};

export default Layout;
