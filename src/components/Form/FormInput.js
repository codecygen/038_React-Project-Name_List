import React, { useState } from 'react';
import InputDiv from './InputDiv';
import Button from '../Button/Button';
import classes from './FormInput.module.css';

const entriesObject = {};

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

    // entriesObject = { Username: '', Age: '', Occupation: '' }
    for (const formTitle of formTitles) {
      entriesObject[formTitle.label] = '';
    }

    const [userInput, setUserInput] = useState(entriesObject);

    const inputEntryHandler = (inputEntry, inputName) => {
        setUserInput(prevState => {
          return {...prevState, [inputName]: inputEntry};
        });
    };

    console.log(userInput);

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