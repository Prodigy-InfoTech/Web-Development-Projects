import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" w-full backdrop-blur-md text-center py-4 fixed  bg-white/5 z-50">
      <Link to={"/"}>
        <h1 className=" text-2xl text-white/70 font-bold">Pocket Crypto</h1>
      </Link>
    </div>
  );
}

export default Header;
