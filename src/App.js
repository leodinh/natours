import React from "react";
import Layout from "./hoc/Layout/Layout";
import About from "./component/About/About";
import Features from "./component/Features/Features";
import Tours from "./component/Tours/Tours";
import Stories from "./component/Stories/Stories";
import Booking from "./component/Booking/Booking";
import Footer from "./component/Footer/Footer";
import Popup from "./component/Popup/Popup";
import "./App.scss";

function App() {
  return (
    <Layout>
      <About />
      <Features />
      <Tours />
      <Stories />
      <Booking />
      <Footer />
      <Popup />
    </Layout>
  );
}

export default App;
