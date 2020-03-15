import * as React from "react";
import "./styles/style.css";
import Nav from "./components/navbar/nav";
import Footer from "./components/footer/footer";
import Container from "./components/container";

const App = () => (
  <div className="App">
    <Nav />
    <Container />
    <Footer />
  </div>
);

export default App;
