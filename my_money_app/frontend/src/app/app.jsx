import "./app-dependencies";
import React from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";

export default (props) => (
  <main className="wrapper">
    <Header />
    <Sidebar />
    <section className="content-wrapper">
      <h1>content</h1>
    </section>
    <Footer />
  </main>
);
