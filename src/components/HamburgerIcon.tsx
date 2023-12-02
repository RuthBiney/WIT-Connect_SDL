import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { signIn, signUp } from "../utils/links";

const HamburgerIcon = () => {
  const [isOpen, setOpen] = useState(false);

  const handleCloseHam = () => setOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} />

      {isOpen && (
        <ul className="absolute z-10 flex flex-col gap-3 px-4 py-4 mt-5 text-center border rounded-lg bg-white/95 right-5">
          <li className="hover:text-orange-500" onClick={handleCloseHam}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/${signIn}`} onClick={handleCloseHam}>
              Sign In
            </Link>
          </li>
          <li>
            <Link to={`/${signUp}`} onClick={handleCloseHam}>
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerIcon;
