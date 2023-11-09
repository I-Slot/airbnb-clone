import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Card from "../src/components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Card
          img={"../images/katie-zaferes.png"}
          rating={5.0}
          reviewCount={5}
          country="Nigeria"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
      </header>
    </div>
  );
}

export default App;
