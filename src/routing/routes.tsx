import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Layout from "./Layout";
import {
  aboutUs,
  contact,
  newOpportunity,
  signIn,
  signUp,
} from "../utils/links";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import PostOpportunities from "../pages/PostOpportunities";

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
      {
        path: newOpportunity,
        element: <PostOpportunities />,
      },
    ],
  },
]);

export default router;
