import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <header className="px-6 py-3 border-b-2 shadow-md md:py-5 md:px-12 lg:px-24">
        <NavBar />
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
