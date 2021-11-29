import React, { useState } from 'react';
import InputDiv from './InputDiv';
import Button from '../Button/Button';
import classes from './FormInput.module.css';

const entryObject = {};

const FormInput = (props) => {

    const formTitles = [
        {
          label: 'Username',
          input: 'text',
          key: 1
        },
    
        {
          label: 'Age',
          input: 'number',
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

    const inputEntryHandler = (inputEntry, inputName) => {
        setUserInput(prevState => {
          return {...prevState, [inputName]: inputEntry};
        });
    };

    const formSubmitHandler = event => {
        event.preventDefault();

        let stringizedInput = '';

        for (const key in userInput) {
          stringizedInput = `${stringizedInput}, ${userInput[key]}`;
        }

        let modifiedInput = {
          text: stringizedInput.slice(2),
          id: Math.random().toString()
        };

        props.sendInputList(modifiedInput);

        // userInput is reset here
        setUserInput(entryObject);
    };

    const allInputs = formTitles.map(formTitle => (
        <InputDiv 
            key={formTitle.key} 
            inputEntryFunc={inputEntryHandler} 
            formInfo={formTitle} 
            inputControlledValue={userInput[formTitle.label]}
        />
    ));

    const deleteHandler = () => {
      // This props was needed for only deleting list.
    };

    return (
        <form onSubmit={formSubmitHandler} className={classes.form}>
            {allInputs}
            <div>
              <Button deleteList={deleteHandler} color="blue">Add User</ Button>
            </div>
        </form>
    );
}

export default FormInput;