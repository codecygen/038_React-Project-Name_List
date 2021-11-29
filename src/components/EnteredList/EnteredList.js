import React from 'react';
import classes from './EnteredList.module.css';
import Button from '../Button/Button';

const EnteredList = (props) => {

    const deleteHandler = () => {
        console.log('hi');
    };

    const allList = props.renderList.map(singleLine => (
        <div key={singleLine.id}>
            <li>{singleLine.text}</li>
            <Button deleteList={deleteHandler} color="red">Delete</ Button>
        </div> 
    ));

    return (
        <section className={classes.div}>
            <h2>Added Users</h2>
            {allList}
        </section>
    );
}

export default EnteredList;