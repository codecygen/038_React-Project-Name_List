import React from 'react';
import classes from './Button.module.css';

const Button = () => {
    return (
        <div className={classes.div}>
            <button type="submit" className={classes.button}>Add User</button>
        </div>
    );
}

export default Button;