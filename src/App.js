import logo from './logo.svg';
import './App.css';
import './App1.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

import React, {useState} from 'react';



let name="Harry"

function App() {
  const [mode, setMode] = useState('light'); //darkmode is enable or not
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
 
  return (
    <>
      {/* <Navbar/>  */}
      
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>

    <div className="container my-3">
    <TextForm  heading="Enter the text to analyze below" mode={mode}/>
    {/* <About/> */}
    </div>
    
  
    </>
  );
}

export default App;
