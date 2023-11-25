import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { aboutUs, contact, signIn } from "../utils/links";

const HamburgerIcon = () => {
  const [isOpen, setOpen] = useState(false);

  const handleCloseHam = () => setOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} />

      {isOpen && (
        <ul className="absolute flex flex-col gap-3 px-4 py-4 mt-5 text-center border rounded-lg bg-white/75 right-5">
          <li className="hover:text-orange-500" onClick={handleCloseHam}>
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500" onClick={handleCloseHam}>
            <Link to={aboutUs}>About Us</Link>
          </li>
          <li className="hover:text-orange-500" onClick={handleCloseHam}>
            <Link to={contact}>Contact</Link>
          </li>
          <li>
            <Link to={`/${signIn}`} onClick={handleCloseHam}>
              Sign In
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerIcon;
