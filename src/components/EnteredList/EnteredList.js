import React from 'react';
import classes from './EnteredList.module.css';
import Button from '../Button/Button';

const EnteredList = () => {
    return (
        <div className={classes.div}>
            <h2>Added Users</h2>
            <div><li>1</li> <Button>Example</ Button></div>
            
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </div>
    );
}

export default EnteredList;