import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({
  isLoggedIn,
  path,
  element,
}: {
  isLoggedIn: boolean;
  path: string;
  element: JSX.Element;
}) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Route path={path} element={element} />;
};
export default ProtectedRoute;
