import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { aboutUs, contact } from "../utils/links";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <ul className="flex space-x-10 items-center text-orange-500">
        <li className="hover:underline">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="hover:underline">
          <NavLink
            to={aboutUs}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            About Us
          </NavLink>
        </li>
        <li className="hover:underline">
          <NavLink
            to={contact}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
