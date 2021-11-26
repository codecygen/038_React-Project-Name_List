import React from 'react';
import FormInput from './components/Form/FormInput';

function App() {

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


  return (
    <FormInput formTexts={formTitles} />
  );
}

export default App;
