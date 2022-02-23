import React, {useState} from 'react';

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor:'white',
    //     border:'1px solid white'
    // });
    
    // const [btnText, setBtnText] = useState('Enable dark mode');

    // const toggleStyle = ()=>{
    //    if( myStyle.color=='black'){
    //     setMyStyle({
    //         color : 'white',
    //         backgroundColor:'black'
    //     })
    //     setBtnText('Enable light mode');
    //    }
    //    else{
    //     setMyStyle({
    //         color : 'black',
    //         backgroundColor:'white'
    //     })
    //     setBtnText('Enable dark mode');
    //    }
    // }

    let myStyle={
      color : props.mode==='dark'?'white':'rgb(36 74 104)',
      backgroundColor : props.mode==='dark'?'rgb(36 74 104)':'white',
      // border:'1px solid',
      // borderColor: props.mode==='dark'?'white':'#042743',
    }

  return (
    <>
        <div className="container my-2" style={{color : props.mode==='dark'?'white':'rgb(36 74 104)'}}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analysis your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatiblity</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div> 
  {/* <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button> */}
</div>
  
    </>
  );
}
