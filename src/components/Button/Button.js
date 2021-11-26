import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <div className={classes.div}>
            <button type="submit" className={classes.button}>{props.children}</button>
        </div>
    );
}

export default Button;