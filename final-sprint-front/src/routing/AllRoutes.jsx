import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";

import Header from "../components/Header";
import FrontPage from "../components/FrontPage";
import SigninPage from "../components/SigninPage";
import SignupPage from "../components/SignupPage";

const AllRoutes = () => {
  const { token } = useAuth();

  // These routes are accesible regardless of authentication
  const publicRoutes = [
    {
      path: "/",
      element: (
        <>
          <Header />
          <FrontPage />
        </>
      ),
    },
  ];

  // Children of the protected route are accessible only to authenticated users
  const authenticatedRoutes = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/search",
          element: <div>Future site of the resume search page</div>,
        },
      ],
    },
  ];

  // These routes are accessible only to users who are NOT authenticated
  const unauthenticedOnlyRoutes = [
    {
      path: "/users/signIn",
      element: (
        <>
          <Header />
          <SigninPage />
        </>
      ),
    },
    {
      path: "users/signUp",
      element: (
        <>
          <Header />
          <SignupPage />
        </>
      ),
    },
  ];

  // Combine the above route arrays
  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!token ? unauthenticedOnlyRoutes : []),
    ...authenticatedRoutes, //These routes are always included, as they are protected by the ProtectedRoute
  ]);

  return <RouterProvider router={router} />;
};

export default AllRoutes;