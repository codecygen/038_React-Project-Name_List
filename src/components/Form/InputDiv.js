import React from 'react';
import classes from './InputDiv.module.css';

const InputDiv = (props) => {

    // Lifts values from this file to FormInput.js
    const inputChangeHandler = event => {
        props.inputEntryFunc(event.target.value, props.formInfo.label);
    };

    return (
        <div className={classes.div}>
            <label>{props.formInfo.label}</label>
            <input 
                value={props.inputControlledValue} 
                onChange={inputChangeHandler} 
                type={props.formInfo.input} 
            />
        </div>
    );
}

export default InputDiv;