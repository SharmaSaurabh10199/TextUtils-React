import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 1000);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2f2f39";
      showAlert("dark mode enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <TextArea mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
