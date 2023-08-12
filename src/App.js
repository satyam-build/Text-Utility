import React, { useState } from "react";
import Navbar from "./components/navbar";
import Textform from "./components/textform";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  // eslint-disable-next-line 
  // : The line above helps ignore any warning by placing it just before the line affected
  const [theme, settheme] = useState("light");
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      msgType: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  function toggleMode() {
    if (theme === "light") {
      settheme("dark");
      document.body.style.backgroundColor = "#333333";
      showalert("Dark mode has been enabled", "success");
      // Below line dynamically changes title of document
      // document.title = "Text-Utlis - Dark mode";

      // setTimeout(() => {
      //   document.title = " Install Text-Utlis";
      // }, 2100);
      // setTimeout(() => {
      //   document.title = " You have virus in your phone";
      // }, 1600);

    }
    else {
      settheme("light");
      document.body.style.backgroundColor = "#F2F2F2";
      showalert("Light mode has been enabled", "success");
      // Below line dynamically changes title of document
      // document.title = "Text-Utlis - Light mode"

    }
  }
  return (
    <div className="App">
      {/* <Navbar title="Text-UtlisProp" aboutText={123232}  />
        <Navbar  aboutText={123232}  />
        <Navbar /> */}
      <Navbar title='Text-Utlis' mode={theme} toggleMode={toggleMode} />
      <Alert alert={alert} />


      <div className="container my-3">

        <Routes>
          {/* When using exact, we do exact matching for routes unless react does partial matching */}
          <Route exact path="/" element={<Textform showAlert={showalert} heading="Enter the text" mode={theme} />} />
          <Route path="/about" element={<About mode ={theme}/>} />
        </Routes>

      </div>

    </div>
  );
}

export default App;