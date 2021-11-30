import React from 'react';
import classes from './WarningUI.module.css';
import Button from '../Button/Button';

const WarningUI = (props) => {

    const closeWarningWindowHandler = () => {
        props.closeWindowFunc();
    };

    return(
        <section className={classes.section}>
            <div>
                <div className={classes.message}>
                    <h2>{props.warningMessage}</h2>
                </div>
                <Button clickAction={closeWarningWindowHandler} color="red">OK</ Button>
            </div>
        </section>
    );
};

export default WarningUI;