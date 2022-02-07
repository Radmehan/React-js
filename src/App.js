import logo from './logo.svg';
import './App.css';
import './App1.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


let name="Harry"

function App() {
  return (
    <>
      {/* <Navbar/>  */}
      
    <Navbar title="TextUtils"/>

    <div className="container">
    <TextForm  heading="Enter the text to analyze below" />
    {/* <About/> */}
    </div>
    
  
    </>
  );
}

export default App;
