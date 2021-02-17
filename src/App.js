import logo from "./logo.svg";
import Timer from "./components/Timer";
import FirstComp from "./components/FirstComp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Timer duration={5} />
      <Timer duration={5} />
      <Timer duration={5} />
      {/* <FirstComp age={12} /> */}
      {/* <FirstComp /> */}
    </div>
  );
}

export default App;
