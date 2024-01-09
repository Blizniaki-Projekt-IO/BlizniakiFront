import classes from "./App.module.scss";
import Webcam from "react-webcam";
import Content from "./components/content/Content";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Characters from "./components/characters/Characters";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Characters />
      <Footer />
    </div>
  );
}

export default App;
