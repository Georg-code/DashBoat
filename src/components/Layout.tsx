import { Outlet, Link } from "react-router-dom";
import { NavbarMinimal } from "./NavbarMinmal";

const Layout = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <NavbarMinimal />
        </div>
        <div style={{ flex: 3 }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
