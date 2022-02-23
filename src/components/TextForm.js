import React, {useState} from 'react';


export default function TextForm(props) {  
  const [text, setText] = useState("Enter text here");
  
//uppercase function
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase','success');
    }

//lowercase function
const handleLoClick = ()=>{
  // console.log("Lowercase was clicked" + text);
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert('converted to lowercase','success');
  
}

//Remove Punctuation function
const handleRemovePunc = ()=>{
  console.log("Remove punc was clicked");
  var newText = text;
  var newSentence = newText.match(/[^_\W]+/g).join(' ');
  setText(newSentence);
  props.showAlert('Punctuations remove successfully','success');
  }
    
//copy text
const copyText = ()=>{
  console.log('text coppied');
  let text=document.getElementById('myBox');
  text.select();
  document.getSelection().removeAllRanges();
  navigator.clipboard.writeText(text.value);
  props.showAlert('Text coppied successfully','success');
}

//extra space
const extraSpace = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(' '));
  props.showAlert('Remvove extra space successfully','success');
}

//clear text
  const clearText = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert('Text cleared successfully','success');
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
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h1>{props.heading}</h1>
          <div className="my-3">
          <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnchange} id='myBox' rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRemovePunc}>Remove Punctuaton</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={extraSpace}>Remove Extra Space</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h2>our text summury</h2>
          <p>{text.split(' ').filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(' ').filter((element)=>{ return element.length!==0}).length} minutes take to read word</p>
          <h2>Preview</h2>
          <p>{text.length>0 ? text: "Nothing to preview"}</p>
        </div>
      
      </>
    );
}
