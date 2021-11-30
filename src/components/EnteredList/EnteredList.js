import React from 'react';
import classes from './EnteredList.module.css';
import Button from '../Button/Button';

const EnteredList = (props) => {

    const deleteHandler = (deleteRequestId) => {
        props.deleteRequestFunc(deleteRequestId)
    };

    let allList = (
        <p style={{textAlign: 'center', fontSize: '1.25rem', fontStyle: 'italic'}}>
            Nothing entered yet...
        </p>
    );

    if (props.renderList.length > 0) {
        allList = props.renderList.map(singleLine => (
            <div key={singleLine.id}>
                <li>{singleLine.text}</li>
                <Button listId={singleLine.id} clickAction={deleteHandler} color="red">Delete</ Button>
            </div> 
        ));
    }

    return (
        <section className={classes.div}>
            <h2>Added Users</h2>
            {allList}
        </section>
    );
}

export default EnteredList;