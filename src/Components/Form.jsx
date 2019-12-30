import React, {useState} from 'react';
const _ = require('lodash');

const Form = (props) => {
    const [text, setText] = useState('');

    const updateText = (e) => {
        const newText = _.capitalize(e.target.value);
        setText(newText);
    };

    const myAnswer = () => props.getAnswer(text, props.id);


    return (
        <div>
            <p><h1>{props.question}</h1></p>
            <input
                onChange={updateText}
                name={"answer"}
                id={props.id}
                placeholder="your answer here"
            />
            <button className="btn btn-outline-light" onClick={myAnswer}><b>Check Answer</b></button>
        </div>
    )
};

export default Form