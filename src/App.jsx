import { useState } from "react";
import "./App.css";
import Login from "./components/login";

function App() {
  return (
    <div>
      <img className="logo" src="./src/assets/charity compass.png"></img>
      <Login />
    </div>
  );
}

export default App;
