import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const ProtectedRoutes = ({ isLogin, children }) => {
  const authTokenString = localStorage.getItem("authToken");
  const token = JSON.parse(authTokenString);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (token) {
    const payload = jwtDecode(token.state.userToken);
    if (payload.role !== "admin") {
      return <Navigate to="/login" />;
    }
  }

  return children ? children : <Outlet />;
};
