import classes from "./App.module.scss";
import Webcam from "react-webcam";
import Content from "./components/content/Content";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div>
      <Hero />
      <Content />
    </div>
  );
}

export default App;
