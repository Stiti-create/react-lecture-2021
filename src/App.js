import logo from "./logo.svg";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Timer duration={5} />
      <Timer duration={5} />
      <Timer duration={5} />
    </div>
  );
}

export default App;
