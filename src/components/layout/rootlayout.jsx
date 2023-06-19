import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

export default function RootLayout(){
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  );
};
