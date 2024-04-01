import React, { useState } from 'react'


export default function TextForm(props) {
    //fuctions
    function touppercase() {
        let newText = text.toUpperCase()
        setText(newText)
        
        
    }
    function onchangehandler(event) {
        setText(event.target.value)
    }
    function tolowercase() {
        let newText = text.toLowerCase()
        setText(newText)
        
    }
    function cleartext() {
        let newText = ''
        setText(newText)
    }
    function clearbox() {
        setText('')
    }
    //functions end

    //states
    const [text, setText] = useState(' Enter text ');
    //states end
    return (
        <>
            <div className='container'style={{backgroundColor:props.mode ==='light'?'white':'#23232b',color:props.mode ==='light'?'#23232b':'white'}} >
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control"style={{backgroundColor:props.mode ==='light'?'white':'#23232b',color:props.mode ==='light'?'#23232bf':'white'}} onClick={clearbox} value={text} onChange={onchangehandler} id="my box" rows="8"></textarea>
                </div>
                <button type="button" onClick={touppercase} className="btn btn-primary mx-2"  > Uppercase</button>
                <button type="button" onClick={tolowercase} class="btn btn-primary mx-2"> Lowercase</button>
                <button type="button" onClick={cleartext} class="btn btn-primary mx-2"> Clear</button>

            </div>
            <div className="container" style={{backgroundColor:props.mode ==='light'?'white':'#23232b',color:props.mode ==='light'?'#23232b':'white'}}>
                <h2>text summary</h2>
                <p> {text.split(" ").length} words, {text.length} letters , {text.split(".").length} sentences , {text.split("\n\n").length} paragraphs</p>
                <p> {0.008 * text.split(" ").length} MINUTES </p>
                <h3>preview</h3>
                <p>{text.length>0?text:"enter something to preview"}</p>
            </div>
        </>
    )

}