import "./app-dependencies"
import React from "react"
import Header from "./components/header/header"
import Sidebar from "./components/sidebar/sidebar"
import Footer from "./components/footer/footer"
import Routes from "./routes/route"
import Messages from './components/notification/massage'

export default (props) => (
  <main className="wrapper">
    <Header />
    <Sidebar />
    <section className="content-wrapper">
      <Routes />
    </section>
    <Footer />
    <Messages />
  </main>
)
