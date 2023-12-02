import { Link } from "react-router-dom";
import { aboutUs, signUp } from "../utils/links";

const HomePage = () => {
  return (
    <>
      <header className="object-contain h-screen pt-32">
        <div className="flex flex-col items-center justify-center mx-4 space-y-12 text-center text-white rounded-lg md:mx-8 lg:mx-32 h-3/4 bg-yellow-800/50">
          <h1 className="text-4xl font-bold text-orange-500">
            WIT <span className="text-orange-900">CONNECT</span>
          </h1>
          <h2 className="text-3xl font-semibold">
            Home of volunteering opportunities
          </h2>
          <div className="flex items-center space-x-10">
            <Link
              className="p-4 text-gray-100 bg-orange-800 border rounded-xl hover:bg-orange-700"
              to={aboutUs}
            >
              Learn More
            </Link>
            <Link
              to={`/${signUp}`}
              className="p-4 text-gray-100 bg-orange-800 border rounded-xl hover:bg-orange-700"
            >
              Sign Up Here
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default HomePage;
