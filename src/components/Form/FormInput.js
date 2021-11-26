import React from 'react';
import InputDiv from './InputDiv';
import Button from '../Button/Button';
import classes from './FormInput.module.css';

const FormInput = () => {

    const formTitles = [
        {
          label: 'Username',
          input: 'text',
          key: 1
        },
    
        {
          label: 'Age',
          input: 'text',
          key: 2
        },
    
        {
          label: 'Occupation',
          input: 'text',
          key: 3
        }
      ];

    const inputEntryHandler = (inputEntry, inputName) => {
        console.log(inputEntry);
        console.log(inputName);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        console.log("Button Clicked!");
    };

    const allInputs = formTitles.map(formText => (
        <InputDiv 
            key={formText.key} 
            inputEntryFunc={inputEntryHandler} 
            formInfo={formText} 
        />
    ));

    return (
        <form onSubmit={formSubmitHandler} className={classes.form}>
            {allInputs}
            <Button>Add User</ Button>
        </form>
    );
}

export default FormInput;