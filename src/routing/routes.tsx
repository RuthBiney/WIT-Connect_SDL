import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Layout from "./Layout";
import { aboutUs, contact, signIn, signUp } from "../utils/links";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: aboutUs,
        element: <AboutPage />,
      },
      {
        path: contact,
        element: <ContactPage />,
      },
      {
        path: signUp,
        element: <SignUpPage />,
      },
      {
        path: signIn,
        element: <SignInPage />,
      },
    ],
  },
]);

export default router;
