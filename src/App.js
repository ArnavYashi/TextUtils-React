import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#091441';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Navbar /> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      {/* <Routes>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze to below" mode={mode} />} />
          <Route exact path='/about' element={<About />} />
        </Routes> */}
      <Alert alert={alert} />
      <div className="container my-3">  
      <TextForm showAlert={showAlert} heading="Enter the text to analyze to below" mode={mode} />
      </div>
      {/* </BrowserRouter> */}
   
    </>
  );
}

export default App;
