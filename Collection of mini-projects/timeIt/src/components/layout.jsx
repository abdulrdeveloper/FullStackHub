import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
