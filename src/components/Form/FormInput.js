import React from 'react';
import InputDiv from './InputDiv';

const FormInput = () => {


    return (
        <form>
            <InputDiv />
            <InputDiv />
            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
    );
}

export default FormInput;