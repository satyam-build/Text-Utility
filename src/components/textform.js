import React, { useState } from 'react'

export default function Textform(props) {
    let [text, setText] = useState("");
    let txtcolor='light';
    if(props.mode==="light"){
        txtcolor="dark";
    }
    else{
        txtcolor="light";
    }

    function handleClickLow() {
       
        let newtxt = text.toLowerCase();
        setText(newtxt);
        props.showAlert(" : Converted to LowerCase","success");
        
    }
    const handleClickUp=()=> {
        setText(text.toUpperCase());
        props.showAlert(" : Converted to Uppercase","success");
    }
    function handleClickCamelCase() {
        // Implement the logic to convert inputText to camelCaseText
        // You can use JavaScript's string manipulation methods like split, map, join, etc.
        // For example:
        const words = text.split(' ');
        const camelCaseWords = words.map((word, index) => {
            if (index === 0) {
                console.log(word.toLowerCase());
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        const camelCaseText = camelCaseWords.join(' ');
        setText(camelCaseText);
    }
    function handleChange(event) {
        setText(event.target.value);
    }
    function handleClickClear() {
        setText("");
        props.showAlert(" : Text has been deleted","success");

    }
    const handleClickSpeech = () => {
        let message = new SpeechSynthesisUtterance();
        // SpeechSynthesisUtterance is a full function , you can see its functionalities on its webpage 
        message.text = text;
        window.speechSynthesis.speak(message);
        props.showAlert(" : This is an auto generated Speech","success");

    }

    const Findword =()=>{
        if(text.split(/\s+/).length===1 && text===""){
            return 0;
        }
        else {
            return text.split(/\s+/).length;
        }
    }

    function textCopy() {
        /* Get the text field */
        let copiedText = text;
        navigator.clipboard.writeText(copiedText);
        props.showAlert(" : Text Copied","success");


        // Since we are using react state we dont need to use any of these 
        // var texttoCopy  = document.getElementById("input");
        // texttoCopy.select();
        // navigator.clipboard.writeText(texttoCopy);
    }

    function removeExtraSpaces(){
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
    }

    const FindChar = ()=>{
        let count=0;
        let characterarr = text.split(" ");
        count = characterarr.join('').length;
        return count;
    }

    return (
        <>
            <div className={`container text-${txtcolor}`} >
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="6" style={{backgroundColor: props.mode === 'light'? 'white' : '#EFF2EF' }}></textarea>
                    <div className="container">
                        <button disabled={text.length===0} onClick={handleClickUp} className="btn btn-secondary my-3 mx-2">Convert text to Uppercase</button>
                        <button disabled={text.length===0} onClick={handleClickLow} className="btn btn-secondary my-3 mx-2">Convert text to Lowercase</button>
                        <button disabled={text.length===0} onClick={handleClickCamelCase} className="btn btn-secondary my-3 mx-2">Convert text to Camelcase</button>
                        <button disabled={text.length===0} onClick={handleClickSpeech} className="btn btn-secondary my-3 mx-2">Generate Speech</button>
                        <button disabled={text.length===0} onClick={handleClickClear} className="btn btn-secondary my-3 mx-2">Delete Text</button>
                        <button disabled={text.length===0} onClick={removeExtraSpaces} className="btn btn-secondary my-3 mx-2">Remove Extra Spaces</button>
                        <button disabled={text.length===0} onClick={textCopy} className="btn btn-secondary my-3 mx-2">Copy Text</button>
                    </div>
                </div>
            </div>
            <div className={`container my-4 text-${txtcolor}`}>
                <h1 className='my2'>Your text summary</h1>
                {/* <h4> {text.split(' ').length} words , {text.length} characters</h4> */}
                <h4>{Findword()} words,{FindChar()} characters</h4>
                {/* You can also this line for above */}
                {/* <h4>{text.split(/\s+/).filter((word)=>{return word.length !== 0}).length}</h4> */}
                {/* This line means we are removing empty spaces by using filter */}
                <h4> Average Time to read text = {(text.split(/\s+/).filter((word)=>{return word.length !== 0}).length)* 0.05}minutes </h4>
                {/* 0.08 minutes is the average time to read a word */}
                <h3 className='my-2'>Preview :</h3>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </>
    )
}
