import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import ContactPage from "../pages/Contact/ContactPage";
import Destination from "../pages/Destination/Destination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "destination",
    element: <Destination />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);

export default router;
