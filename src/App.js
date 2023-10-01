import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Alert from "./Alert";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [buttonTxt, setButtonTxt] = useState("Dark");
  const [colorTxt, setColorTxt] = useState("black");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setButtonTxt("Light");
      setMode("dark");
      setColorTxt("white");
      document.body.style.backgroundColor = "rgb(1, 15, 28)";
      document.body.className = "text-light";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setButtonTxt("Dark");
      setMode("light");
      setColorTxt("black");
      document.body.style.backgroundColor = "white";
      document.body.className = "text-dark";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          buttonTxt={buttonTxt}
          colorTxt={colorTxt}
          alert={alert}
        />
        <div className="container my-5">
          {/* <Routes> */}
            {/* /users ---> Component1
                /users/home ----> Component2
                (Use exact keyword for exact matching and rendering of pages) */}
            {/* <Route exact path="/about"
              element={<About/>}
              /> */}
            {/* <Route exact path="/"
              element={<TextForm heading="Enter the text below" mode={mode} showAlert={showAlert}/>}
            /> */}
          {/* </Routes> */}
          <TextForm heading="Enter the text below" mode={mode} showAlert={showAlert}/>
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
