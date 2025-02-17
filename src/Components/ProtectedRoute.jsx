import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  const isAuthenticated = localStorage.getItem("authToken"); // You can use a better method to check the authentication status
  
  return isAuthenticated ? element : element ;
}

export default ProtectedRoute;
// {/* <Navigate to="/signin" /> */}