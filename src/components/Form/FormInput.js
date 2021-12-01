import React, { useState } from 'react';
import InputDiv from './InputDiv';
import Button from '../Button/Button';
import classes from './FormInput.module.css';
import WarningUI from '../WarningUI/WarningUI';


let popUpMessage = '';

const FormInput = (props) => {
  const entryObject = {};

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
        key: 3,
      }
    ]; 

    // entryObject = { Username: '', Age: '', Occupation: '' }
    for (const formTitle of formTitles) {
      entryObject[formTitle.label] = '';
    }

    const [userInput, setUserInput] = useState(entryObject);
    const [isAllInputEntered, setIsAllInputEntered] = useState(true);

    const inputEntryHandler = (inputEntry, inputName) => {
        setUserInput(prevState => {
          return {...prevState, [inputName]: inputEntry};
        });
    };

    const closeWindowHandler = () => {
      setIsAllInputEntered(true);
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

      let counter = 1;

      for (const key in userInput) {
        if (userInput[key].trim().length !== 0) {
          if (counter === Object.keys(userInput).length) {
            setIsAllInputEntered(true);
            // userInput is reset here
            setUserInput(entryObject);
            props.sendInputList(modifiedInput);
          }
        } else {
          setIsAllInputEntered(false);
          return(popUpMessage = `"${key}" field left blank. Please fill in all fields.`);
        }

        counter++;
      }
    };

    const allInputs = formTitles.map(formTitle => (
        <InputDiv 
            key={formTitle.key} 
            inputEntryFunc={inputEntryHandler} 
            formInfo={formTitle} 
            inputControlledValue={userInput[formTitle.label]}
        />
    ));

    let finalContent = (
      <>
        <form onSubmit={formSubmitHandler} className={classes.form}>
            {allInputs}
            <div>
              <Button clickAction={() => {}} color="blue">Add User</ Button>
            </div>
        </form>
      </>
    );

    if (isAllInputEntered === false) {
      finalContent = (
        <>
          <WarningUI closeWindowFunc={closeWindowHandler} warningMessage={popUpMessage} />
          <form onSubmit={formSubmitHandler} className={classes.form}>
              {allInputs}
              <div>
                <Button clickAction={() => {}} color="blue">Add User</ Button>
              </div>
          </form>
        </>
      );
    }

    return (
      <>
        {finalContent}
      </>
    );
}

export default FormInput;