import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Layout from "./Layout";
import {
  aboutUs,
  contact,
  newOpportunity,
  opportunities,
  signIn,
  signUp,
} from "../utils/links";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import PostOpportunities from "../pages/PostOpportunities";
import OpportunitiesPage from "../pages/OpportunitiesPage";
import OpportunityDetails from "../components/OpportunityDetails";
import OpportunityDetailsPage from "../pages/OpportunityDetailsPage";
import AuthLayout from "./AuthLayout";
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
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
  {
    path: "/app",
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
        path: newOpportunity,
        element: <PostOpportunities />,
      },
      {
        path: opportunities,
        element: <OpportunitiesPage />,
        children: [
          {
            path: ":id",
            element: <OpportunityDetails />,
          },
        ],
      },

      {
        path: "opportunities/details/:id",
        element: <OpportunityDetailsPage />,
      },
    ],
  },
]);

export default router;
