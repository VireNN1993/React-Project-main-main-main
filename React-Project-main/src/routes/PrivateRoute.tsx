import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toast } from "react-toastify";

const PrivateRoute = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const location = useLocation();

  if (!isLoggedIn) {
    // Save current path to return to it after successful login
    toast.info("Please sign in to access this page");
    return (
      <Navigate to="/signin" state={{ from: location.pathname }} replace />
    );
  }

  // User is logged in - render child components
  return <Outlet />;
};

export default PrivateRoute;
