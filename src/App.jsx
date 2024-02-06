import "./App.css";
import "./components/css/main.scss";
import Header from "./components/Header";
import Hero from "./Hero";
import Tabs from "./Tabs";

function App() {
  return (
    <div className="App">
      <div className="resume">
        
        <Header />
        <Hero />
        <div className="dabs">
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default App;
