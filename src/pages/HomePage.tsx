import { Link } from "react-router-dom";
import { aboutUs, signUp } from "../utils/links";

const HomePage = () => {
  return (
    <>
      <header className="pt-32">
        <div className="flex flex-col items-center justify-center space-y-12">
          <h1 className="text-4xl font-bold text-orange-500">
            WIT <span className="text-orange-900">CONNECT</span>
          </h1>
          <h2 className="text-3xl font-semibold">
            Home of volunteering opportunities
          </h2>
          <div className="flex items-center space-x-10">
            <Link
              className="border p-4 rounded-xl bg-orange-800 text-gray-100 hover:bg-orange-700"
              to={aboutUs}
            >
              Learn More
            </Link>
            <Link
              to={`/${signUp}`}
              className="border p-4 rounded-xl bg-orange-800 text-gray-100 hover:bg-orange-700"
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
