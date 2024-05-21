import { createBrowserRouter } from "react-router-dom";
// pages
// auth
import Login from "../pages/auth/Login";
// dashboard
import Index from "../pages/dashboard/Index";
// dashboard children
import Category from "../pages/dashboard/Category";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "../error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
    children: [
      
    ]
  },
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/category",
        element: <Category />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
