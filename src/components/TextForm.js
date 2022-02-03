import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
  
//uppercase function
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
    }

//lowercase function
const handleLoClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText= text.toLowerCase();
  setText(newText);
}

//event handle function
    const handleOnchange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    // text = "New text"; // wrong way to set text
    //setText("New text"); // Correct way to set text
    
    return (
      <>     
        <div className="container my-3">
          <h1>{props.heading}</h1>
          <div className="my-3">
          <textarea className="form-control" value={text} onChange={handleOnchange} id='myBox' rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
        </div>
        <div className="container">
          <h2>our text summury</h2>
          <p>{text.split(' ').length} words and {text.length} characters</p>
          <p>{0.008 * text.split(' ').length} minutes take to read word</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      
      </>
    );
}
