import { Link } from "react-router-dom";
import { aboutUs, signUp } from "../utils/links";
import AboutPage from "./AboutPage";

const LandingPage = () => {
  return (
    <>
      <header className="object-contain h-screen">
        <div className="h-3/4  bg-[url('hero.webp')] bg-cover bg-center md:bg-right-top ">
          <div className="w-full h-full bg-blue-600/30 backdrop-brightness-75">
            <div className="flex flex-col items-center justify-center h-full mx-4 space-y-12 text-center text-white rounded-lg md:mx-8 lg:mx-32">
              <h1 className="px-6 py-3 text-4xl font-bold text-orange-500 bg-white">
                WIT <span className="text-orange-900">CONNECT</span>
              </h1>
              <h2 className="text-3xl font-semibold">
                Home of volunteering opportunities
              </h2>
              <div className="flex items-center space-x-10">
                <Link
                  to={`/${signUp}`}
                  className="p-4 font-bold text-gray-100 bg-orange-800 border rounded-xl hover:bg-orange-700"
                >
                  Sign Up Here
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <AboutPage />
        </div>
      </header>
    </>
  );
};

export default LandingPage;
