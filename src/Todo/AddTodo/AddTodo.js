import React, { useState } from 'react';

import PropTypes from 'prop-types';

import './AddTodo.css'

export const AddTodo = (props) => {
    const { onCreate } = props;

    const [value, setValue] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        if (value.trim()) {
            onCreate(value);
            setValue('');
        }
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <input value={value} onChange={(event) => setValue(event.target.value)} />
            <button type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func
}
