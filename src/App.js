// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      document.title = 'TextUtils | Dark';
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      // setInterval(() => {
      //   document.title = 'TextUtils | Is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils';
      // }, 1500);
    }
    else {
      document.title = 'TextUtils | Light'
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }
  return (
    <>
      <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={ alert }/>
      <div className="container my-3 ">
        <Switch>
          <Route exact path="/about">
              <About mode={ mode}/>
          </Route>
          <Route exact path="/">
            <TestForm showAlert={showAlert} heading='Try TextUtils - Word counter | Character Counter | Remove Extra Spaces' mode={mode} />
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  )
}

export default App;
