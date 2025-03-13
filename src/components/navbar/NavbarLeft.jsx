import React from "react";
import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <Link to="/" className="text-5xl flex items-center font-bold">
      <img src="./logo.png" alt="logo" width={130} />
      <span className="font-custom">ShopyZone</span>
    </Link>
  );
};

export default NavbarLeft;
