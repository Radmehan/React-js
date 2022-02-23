import logo from './logo.svg';
import './App.css';
import './App1.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import React, {useState} from 'react';
import Alert from './components/Alert';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";



let name="Harry"

function App() {
  const [mode, setMode] = useState('light'); //darkmode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  const toggleMode = (cls)=>{
    // console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enable','success');
      // document.title = "TexUtils - Dark Mode"
      // setInterval(() => {
      //   document.title = "TexUtils is Amazing Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TexUtils download now"
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enable','success');
      // document.title = "TexUtils - Light Mode"
    }
  }
 
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>

          <Route path="/*" element={<Navigate to="/"/>}/>
          <Route path="/" element={ <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter Character counter" mode={mode}/>}/>
          <Route path="/about" element={ <About mode={mode}/>}/>

        </Routes>
      </div>
      
    </>
  );
}

export default App;
