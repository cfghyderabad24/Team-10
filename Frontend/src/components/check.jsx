import React from "react";
import { useSelector } from "react-redux";
export const check = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  console.log("User:", user);
  console.log("Token:", token);
  return <div>check </div>;
};
