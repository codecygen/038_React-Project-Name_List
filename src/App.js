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

  const deleteRequestHandler = (deleteRequestObjectId) => {
    setInputList(prevInputList => {
      const updatedInputList = prevInputList.filter(singleObject => singleObject.id !== deleteRequestObjectId);
      return updatedInputList;
    });
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