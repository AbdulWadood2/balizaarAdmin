import { createBrowserRouter } from "react-router-dom";
// pages
// auth
import Login from "../pages/auth/Login";
// dashboard
import Dashboard from "../pages/dashboard/Dashboard";
// dashboard children
import Category from "../pages/dashboard/Category";
import ErrorPage from "../error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Category />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
