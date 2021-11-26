import React from 'react';
import InputDiv from './InputDiv';
import Button from '../Button/Button';
import classes from './FormInput.module.css';

const FormInput = (props) => {

    const inputEntryHandler = (inputEntry, inputName) => {
        console.log(inputEntry);
        console.log(inputName);
    }

    const allInputs = props.formTexts.map(formText => (
        <InputDiv 
            key={formText.key} 
            inputEntryFunc={inputEntryHandler} 
            formInfo={formText} 
        />
    ));

    return (
        <form className={classes.form}>
            {allInputs}
            <Button>Add User</ Button>
        </form>
    );
}

export default FormInput;