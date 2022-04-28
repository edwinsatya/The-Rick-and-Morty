import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
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
      <Footer />
    </>
  );
};

export default Layout;
