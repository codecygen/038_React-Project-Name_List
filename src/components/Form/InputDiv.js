import React from 'react';
import classes from './InputDiv.module.css';

const InputDiv = () => {


    return (
        <div className={classes.div}>
            <label>Age (Years)</label>
            <input type="number" />
        </div>
    );
}

export default InputDiv;