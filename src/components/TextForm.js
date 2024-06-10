import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success");

    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success");

    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text,setText] = useState('');
    return (
        <>
        <div className='container' style={{color:props.mode==="dark" ? "white":"black"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" id='myBox' onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==="dark" ? "grey":"white", color:props.mode==="dark" ? "white":"black"}} rows="12"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
        </div>
        <div className="container my-3" style={{color:props.mode==="dark" ? "white":"black"}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something int the textbox to preview it here"}</p>
        </div>
        </>
    )
}
