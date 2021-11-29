import React from 'react';
import classes from './WarningUI.module.css';
import Button from '../Button/Button';

const WarningUI = () => {
    const deleteHandler = () => {
        // This props was needed for only deleting list.
    };

    return(
        <section className={classes.section}>
            <div>
                <h2>There seems to be a problem!</h2>
                <Button deleteList={deleteHandler} color="red">OK</ Button>
            </div>
        </section>
    );
};

export default WarningUI;