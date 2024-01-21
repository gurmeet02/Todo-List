import React from "react";
import PrimaryBtn from "./PrimaryBtn";

const Navbar = () => {
  return (
    <nav className="container flex justify-end py-4">
      <PrimaryBtn text={"Logout"} />
    </nav>
  );
};

export default Navbar;
