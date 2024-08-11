import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";

import Header from "../components/Header";
import FrontPage from "../components/FrontPage";
import SigninPage from "../components/SigninPage";
import SignupPage from "../components/SignupPage";
import Error404 from "../components/Error404";
import SearchPage from "../components/SearchPage";
import Landing from "../components/Landing";

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
          path: "/resumes",
          element: (
            <>
              <Header />
              <SearchPage />
            </>
          ),
        },
        {
          path: "users/signIn/success",
          element: (
            <>
              <Header />
              <Landing
                header="Welcome!"
                message="You can now search resumes using the Search button above."
              />
            </>
          ),
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
    {
      path: "users/signOut/success",
      element: (
        <>
          <Header />
          <Landing
            header="Goodbye!"
            message="You have logged out, and can now close the tab."
          />
        </>
      ),
    },
    {
      path: "users/signUp/success",
      element: (
        <>
          <Header />
          <Landing
            header="Success!"
            message="Your account has been created. You can Sign Into it using the buttom above."
          />
        </>
      ),
    },
  ];

  // Combine the above route arrays
  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!token ? unauthenticedOnlyRoutes : []),
    ...authenticatedRoutes, // These routes are always included, as they are protected by the ProtectedRoute
    ...[
      // Catch-all for unmatched routes
      {
        path: "*",
        element: (
          <>
            <Header />
            <Error404 />
          </>
        ),
      },
    ],
  ]);

  return <RouterProvider router={router} />;
};

export default AllRoutes;
