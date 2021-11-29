import React, { useState } from 'react';
import FormInput from './components/Form/FormInput';
import EnteredList from './components/EnteredList/EnteredList';

function App() {

  const [inputList, setInputList] = useState([]);

  const inputListHandler = (newInput) => {

    setInputList(prevState => {
      return [...prevState, newInput];
    });
  };

  return (
    <>
      <FormInput sendInputList={inputListHandler} />
      <EnteredList renderList={inputList} />
    </>
  );
}

export default App;