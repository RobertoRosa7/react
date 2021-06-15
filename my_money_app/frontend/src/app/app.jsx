import React from "react"
import "./app-dependencies"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Messages from './components/notification/massage'
import Sidebar from "./components/sidebar/sidebar"

export default (props) => (
  <main className="wrapper">
    <Header />
    <Sidebar />
    <section className="content-wrapper">
      {/* <Routes /> */}
      {props.children}
    </section>
    <Footer />
    <Messages />
  </main>
)
