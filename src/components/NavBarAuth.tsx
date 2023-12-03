import { Link } from "react-router-dom";
import Logo from "./Logo";
import { signIn } from "../utils/links";
import HamburgerIcon from "./HamburgerIcon";

const NavBarAuth = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to="/">
        <Logo />
      </Link>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-10 text-lg text-orange-500 lg:space-x-16">
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
      <HamburgerIcon />
    </div>
  );
};

export default NavBarAuth;
