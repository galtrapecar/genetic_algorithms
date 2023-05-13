import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Population } from "./components/Population/Population";

function App() {
  return (
    <div className="container">
        <Population />
    </div>
  );
}

export default App