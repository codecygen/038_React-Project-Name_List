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

  console.log(inputList);

  const deleteRequestHandler = (deleteObjectId) => {
    console.log(deleteObjectId);
  };

  return (
    <>
      <FormInput sendInputList={inputListHandler} />
      <EnteredList 
        deleteRequestFunc={deleteRequestHandler} 
        renderList={inputList} 
      />
    </>
  );
}

export default App;