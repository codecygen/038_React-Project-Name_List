import React from 'react';
import classes from './EnteredList.module.css';
import Button from '../Button/Button';

const EnteredList = () => {
    return (
        <section className={classes.div}>
            <h2>Added Users</h2>
            <div>
                <li>1dskgjsogjsodiguipasioguoisadhgiosdgujl</li>
                <Button color="red">Delete</ Button>
            </div>
            <div>
                <li>1dskgjsogjsodiguipasioguoisadhgiosdgujl</li>
                <Button color="red">Delete</ Button>
            </div>
            <div>
                <li>1dskgjsogjsodiguipasioguoisadhgiosdgujl</li>
                <Button color="red">Delete</ Button>
            </div>
            <div>
                <li>1dskgjsogjsodiguipasioguoisadhgiosdgujl</li>
                <Button color="red">Delete</ Button>
            </div>
        </section>
    );
}

export default EnteredList;