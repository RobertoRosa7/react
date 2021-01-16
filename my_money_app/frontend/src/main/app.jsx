import "../common/template/dependencies";
import React from "react";
import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";
import Footer from "../common/template/footer";

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
