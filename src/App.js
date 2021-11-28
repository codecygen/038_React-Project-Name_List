import React, { useState } from 'react';
import FormInput from './components/Form/FormInput';
import EnteredList from './components/EnteredList/EnteredList';

function App() {

  const [inputList, setInputList] = useState([]);

  const inputListHandler = (submittedList) => {
    // console.log(submittedList);
    setInputList(prevState => {
      return [...prevState, submittedList];
    });
    // console.log(inputList);
  };


  return (
    <>
      <FormInput sendInputList={inputListHandler} />
      <EnteredList />
    </>
  );
}

export default App;