import React, { ReactNode } from "react";
import { Navigate, Outlet, Route, RouteProps } from "react-router-dom";

const ProtectedRoute = ({
  isLoggedIn,
  children,
}: {
  isLoggedIn: boolean;
  children: JSX.Element;
}) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default ProtectedRoute;
