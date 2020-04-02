import * as React from "react";
import "./styles/style.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
