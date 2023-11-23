import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { aboutUs, contact, signIn } from "../utils/links";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <Logo />
      </Link>
      <ul className="flex space-x-16 items-center text-orange-500 text-lg">
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
      <Link
        to={`/${signIn}`}
        className="border py-2 px-4 rounded-lg bg-orange-800 text-white hover:bg-orange-700"
      >
        Sign In
      </Link>
    </div>
  );
};

export default NavBar;
