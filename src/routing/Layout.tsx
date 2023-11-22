import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <header className="border-b-2 py-4 px-24 shadow-md">
        <NavBar />
      </header>
      <div className="bg-gray-100 h-screen py-4 px-10">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
