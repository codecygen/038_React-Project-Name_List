import React from 'react';
import InputDiv from './InputDiv';
import Button from '../Button/Button';
import classes from './FormInput.module.css';

const FormInput = (props) => {

    const inputEntryHandler = (inputEntry, inputName) => {
        console.log(inputEntry);
        console.log(inputName);
    }

    return (
        <form className={classes.form}>
            {props.formTexts.map(formText => (
                <InputDiv 
                    key={formText.key} 
                    inputEntryFunc={inputEntryHandler} 
                    formInfo={formText} 
                />
            ))}
            <Button>Add User</ Button>
        </form>
    );
}

export default FormInput;