import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    const colorClass = `classes.${props.color}`;

    return (
        <div className={classes.div}>
            <button 
                type="submit" 
                className={`${classes.button} ${colorClass}`}>
                    {props.children}
            </button>
        </div>
    );
}

export default Button;