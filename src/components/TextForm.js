import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleOnchange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    // text = "New text"; // wrong way to set text
    //setText("New text"); // Correct way to set text
    
    return (
      <div className="my-3">
        <h1>{props.heading}</h1>
        <div className="my-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id='myBox' rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
      </div>
    );
}
