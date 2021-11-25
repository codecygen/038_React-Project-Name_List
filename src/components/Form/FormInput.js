import React from 'react';
import InputDiv from './InputDiv';
import Button from '../Button/Button';
import classes from './FormInput.module.css';

const FormInput = (props) => {

    return (
        <form className={classes.form}>
            <InputDiv inputInfo={props.formTexts} />
            <InputDiv inputInfo={props.formTexts} />
            <Button />
        </form>
    );
}

export default FormInput;