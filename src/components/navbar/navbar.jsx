import { NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <>
      <nav className="nav">
          <div><NavLink to="/">Home</NavLink></div>
          <div><NavLink to="about">About</NavLink> </div>
          <div><NavLink to="contact">Contact</NavLink></div>
          <div><NavLink to="services">Services</NavLink></div>
      </nav>
    </>
  );
};

