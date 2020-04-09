import * as React from "react";
import "./styles/style.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";

const App = () => {
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

  const infoRef = React.useRef(null);
  const executeScroll = () => scrollToRef(infoRef);
  return (
    <div className="App">
      <Header executeScroll={executeScroll} />
      <Hero />
      <Info reference={infoRef} />
      <Footer />
    </div>
  );
};

export default App;
