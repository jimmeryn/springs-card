import * as React from "react";
import "./styles/style.css";
import About from "./components/About";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";

const App = () => (
  <div className="App">
    <Background />
    <Header />
    <Hero />
    <About />
    <Info />
    <Footer />
  </div>
);

export default App;
