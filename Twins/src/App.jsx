import classes from "./App.module.scss";
import Webcam from "react-webcam";
import Content from "./components/content/Content";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
