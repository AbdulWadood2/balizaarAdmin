import { createBrowserRouter } from "react-router-dom";
// pages
// auth
import Login from "../pages/auth/Login";
// dashboard
import Dashboard from "../pages/dashboard/Dashboard";
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
  }
]);

export default router;
