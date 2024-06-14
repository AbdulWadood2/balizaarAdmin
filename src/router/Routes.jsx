import { createBrowserRouter } from "react-router-dom";
// pages
// auth
import Login from "../pages/auth/Login";
// dashboard
import Index from "../pages/Index";
// dashboard children
import Category from "../../src/pages/Category.jsx";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ErrorPage from "../error-page";
import AllBannerPage from "../components/banner/AllBannerPage";
import AllProducts from "../pages/AllProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
    children: [],
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
        element: <DashboardIndex />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/dashboard/main",
            element: <Dashboard />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/dashboard/allBanners",
            element: <AllBannerPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
