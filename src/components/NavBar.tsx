import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { newOpportunity, opportunities, signIn, signUp } from "../utils/links";
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
              to={`/${opportunities}`}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Available Opportunities
            </NavLink>
          </li>

          <li className="hover:underline">
            <NavLink
              to={`/${newOpportunity}`}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Post Opportunity
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

          <li>
            <Link
              to={`/${signUp}`}
              className="px-4 py-2 text-white bg-orange-800 border rounded-lg hover:-orange-700"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <HamburgerIcon />
    </div>
  );
};

export default NavBar;
