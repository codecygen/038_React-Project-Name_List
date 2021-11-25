import React from 'react';
import classes from './InputDiv.module.css';

const InputDiv = (props) => {


    return (
        <div className={classes.div}>
            <label>{props.inputInfo[0].label}</label>
            <input type={props.inputInfo[0].input} />
        </div>
    );
}

export default InputDiv;