import React from 'react';
import classes from './WarningUI.module.css';
import Button from '../Button/Button';

const WarningUI = () => {

    return(
        <section className={classes.section}>
            <div>
                <div className={classes.message}>
                    <h2>Problem!</h2>
                </div>
                <Button deleteList={() => {}} color="blue">OK</ Button>
            </div>
        </section>
    );
};

export default WarningUI;