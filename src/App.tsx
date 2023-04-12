import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
