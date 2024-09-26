import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/register",
      element: <RegistrationPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
