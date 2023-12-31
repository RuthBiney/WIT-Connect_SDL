import { Link } from "react-router-dom";
import { aboutUs, signUp } from "../utils/links";
import AboutPage from "./AboutPage";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
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
            </div>
          </div>
        </div>
        <div>
          <AboutPage />
        </div>
      </header>
    </div>
  );
};

export default HomePage;
