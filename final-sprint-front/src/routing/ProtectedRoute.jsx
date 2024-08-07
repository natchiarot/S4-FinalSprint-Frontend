import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

// Route which will forward navigation to its children if an auth token exists,
//  otherwise navigates the browser to the login page
export const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) return <Navigate to="/users/signIn" />;

  return <Outlet />;
};