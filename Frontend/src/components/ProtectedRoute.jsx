import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { PartnerOrg } from "./PartnerOrg";
import { Director } from "./Director";
import { FrontLiners } from "./FrontLiners";

const roleBasedComponents = {
  director: Director, // Replace with your actual component
  org: PartnerOrg, // Replace with your actual component
  frontliner: FrontLiners, // Replace with your actual component
};

export const ProtectedRoute = ({ component, ...rest }) => {
  const user = useSelector((state) => state.user);
  user.role = "org";

  const getComponentForRole = (role) => {
    return roleBasedComponents[role] || DefaultComponent; // Replace DefaultComponent if needed
  };

  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  const RoleComponent = getComponentForRole(user.role);
  return <RoleComponent {...rest} />;
};
