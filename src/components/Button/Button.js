import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {

    const clickHandler = () => {
        props.deleteList(props.listId);
    };

    return (
        <button 
            type="submit" 
            className={`${classes['button']} ${classes[`${props.color}`]}`}
            onClick={clickHandler}>
                {props.children}
        </button>
    );
}

export default Button;