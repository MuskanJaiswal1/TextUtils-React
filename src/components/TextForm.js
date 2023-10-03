import React, {useState} from "react";

export default function TextForm(props) {

  const handleUpClick=()=>{
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");
  }
  const handleLowClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success");
  }
  const handleCapitalizeClick=()=>{
    var arr = text.split(" ");
    var c = arr.length;
    var n=0;
    var temp = "";
    var final = "";
    while(c!==0){
      temp = arr[n].charAt(0).toUpperCase() + arr[n].substring(1).toLowerCase();
      c--;
      n++;
      final = final + temp + " ";
      if(n===arr.length){
        final=final.trim();
      }
    }
    setText(final);
    props.showAlert("Capitalized the first letter of each word","success");
  }
  const handleClearClick=()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Cleared text area","success");
  }
  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0,9999);  no us of range here, it automatically selects
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied the text","success");
  }
  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed all extra spaces","success");
  }

  const handleOnChange=(event)=>{
    // console.log("OnChange");
    setText(event.target.value);
  }

const [text, setText] = useState('');
// setText("New text");
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-secondary" onClick={()=>handleUpClick()}>
          Convert to upperCase
        </button>
        <button className="btn btn-secondary mx-2 my-2" onClick={()=>handleLowClick()}>
          Convert to lowerCase
        </button>
        <button className="btn btn-secondary mx-1 my-2" onClick={()=>handleCapitalizeClick()}>
          Capitalize
        </button>
        <button className="btn btn-secondary mx-1 my-2" onClick={()=>handleCopy()}>
          Copy Text
        </button>
        <button className="btn btn-secondary mx-1 my-2" onClick={()=>handleExtraSpaces()}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-secondary mx-1 my-2" onClick={()=>handleClearClick()}>
          Clear
        </button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length-1} words and {text.length} characters.</p>
      <p>Read in {0.08*text.split(" ").length} minutes</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Enter your text above to preview it here."}</p>
    </div>
    </>
  );
}
