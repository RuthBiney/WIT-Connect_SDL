import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Layout from "./Layout";
import { aboutUs, contact } from "../utils/links";

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
    ],
  },
]);

export default router;
