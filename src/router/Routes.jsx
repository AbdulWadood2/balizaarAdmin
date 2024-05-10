import { createBrowserRouter } from "react-router-dom";
// pages
// auth
import Login from "../pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export default router;
