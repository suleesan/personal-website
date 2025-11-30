import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import PokeballCursor from "./playgroundcomponents/pokeballCursor";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
      {/* needed because pokeball cursor needs to work with the navbar as well */}
      <PokeballCursor />
    </div>
  );
};

export default Layout;
