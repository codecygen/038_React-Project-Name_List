import React from 'react';
import classes from './WarningUI.module.css';
import Button from '../Button/Button';

const WarningUI = (props) => {

    return(
        <section className={classes.section}>
            <div>
                <div className={classes.message}>
                    <h2>{props.warningMessage}</h2>
                </div>
                <Button clickAction={() => alert('Close the window!')} color="red">OK</ Button>
            </div>
        </section>
    );
};

export default WarningUI;