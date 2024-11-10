import { Outlet } from "react-router-dom";
import Header from "../layout/header";
import "../../styles/components/layout.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
