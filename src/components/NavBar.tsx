import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { newOpportunity, opportunities } from "../utils/links";
import HamburgerIcon from "./HamburgerIcon";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to="/app">
        <Logo />
      </Link>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-10 text-lg text-orange-500 lg:space-x-16">
          <li className="hover:underline">
            <NavLink to="/app" className="hover:underline">
              Home
            </NavLink>
          </li>

          <li className="hover:underline">
            <NavLink
              to={`${opportunities}`}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Available Opportunities
            </NavLink>
          </li>

          <li className="hover:underline">
            <NavLink
              to={`${newOpportunity}`}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Post Opportunity
            </NavLink>
          </li>

          <li className="hover:underline">
            <Link to="/" className="hover:underline">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <HamburgerIcon />
    </div>
  );
};

export default NavBar;
