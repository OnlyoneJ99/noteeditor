import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound(){
  return (
    <div className="error">
      <div>Page not found</div>
      <NavLink to="/">home</NavLink>
    </div>
  );
};
