import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC<{
  children?: JSX.Element | JSX.Element[];
  pageTitle?: string;
}> = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle || "Supaflash"}</title>
        <link rel="shortcut icon" href="logo.svg" />
      </Head>
      <div className="w-full min-h-screen flex flex-col ">
        <Navbar />
        <main className="w-full flex-1 py-12 space-y-16">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
