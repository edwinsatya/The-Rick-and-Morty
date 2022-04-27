import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router-dom";

const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
