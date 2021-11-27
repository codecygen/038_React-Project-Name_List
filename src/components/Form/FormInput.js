import React, { useState } from 'react';
import InputDiv from './InputDiv';
import Button from '../Button/Button';
import classes from './FormInput.module.css';

const entryObject = {};

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

    // entryObject = { Username: '', Age: '', Occupation: '' }
    for (const formTitle of formTitles) {
      entryObject[formTitle.label] = '';
    }

    const [userInput, setUserInput] = useState(entryObject);
    const [submits, setSubmits] = useState([]);

    const inputEntryHandler = (inputEntry, inputName) => {
        setUserInput(prevState => {
          return {...prevState, [inputName]: inputEntry, ID: Math.random().toString()};
        });
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        setSubmits(prevState => {
          return [...prevState, userInput];
        });
    };

    console.log(submits);

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