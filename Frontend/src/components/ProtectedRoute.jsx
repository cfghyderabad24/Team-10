import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { PartnerOrg } from "./PartnerOrg";
import { Director } from "./Director";
import { FrontLiners } from "./FrontLiners";

const roleBasedComponents = {
  cry_director: Director, // Replace with your actual component
  partner_org: PartnerOrg, // Replace with your actual component
  cry_frontliner: FrontLiners, // Replace with your actual component
};

export const ProtectedRoute = ({ component, ...rest }) => {
  const user = useSelector((state) => state.user);
  console.log(user.role);
  // user.role = "cry_director";

  const getComponentForRole = (role) => {
    return roleBasedComponents[role] ; // Replace DefaultComponent if needed
  };

  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  const RoleComponent = getComponentForRole(user.role);
  console.log(RoleComponent);
  return <RoleComponent {...rest} />;
};
