import React from 'react';
import FormInput from './components/Form/FormInput';

function App() {

  const formTitles = [
    {
      label: 'Username',
      input: 'text'
    },

    {
      label: 'Age (Years)',
      input: 'text'
    }
  ]


  return (
    <div>
      <FormInput formTexts={formTitles} />
    </div>
  );
}

export default App;
