import React from 'react';
import InputDiv from './InputDiv';
import Button from '../Button/Button';
import classes from './FormInput.module.css';

const FormInput = () => {


    return (
        <form className={classes.form}>
            <InputDiv />
            <InputDiv />
            <Button />
        </form>
    );
}

export default FormInput;