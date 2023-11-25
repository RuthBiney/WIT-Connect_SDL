import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { aboutUs, contact, signIn } from "../utils/links";
import HamburgerIcon from "./HamburgerIcon";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to="/">
        <Logo />
      </Link>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-10 text-lg text-orange-500 lg:space-x-16">
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
          <li>
            <Link
              to={`/${signIn}`}
              className="px-4 py-2 text-white bg-orange-800 border rounded-lg hover:-orange-700"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
      <HamburgerIcon></HamburgerIcon>
    </div>
  );
};

export default NavBar;
