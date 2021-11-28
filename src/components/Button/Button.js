import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {

    return (
        <button 
            type="submit" 
            className={`${classes['button']} ${classes[`${props.color}`]}`}>
                {props.children}
        </button>
    );
}

export default Button;