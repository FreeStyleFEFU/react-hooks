import React, { useContext } from 'react';

import PropTypes from 'prop-types';

import Context from "../../context";

import './TodoItem.css';

export const TodoItem = (props) => {
    const { id, completed, title, onChange } = props;

    const { removeTodo } = useContext(Context)

    return (
        <li className="item">
            <span className={completed ? "done" : ""}>
                <input checked={completed} className="input" type="checkbox" onChange={() => onChange(id)} />
                {title}
            </span>
            <button className="rm" onClick={() => removeTodo(id)}>&times;</button>
        </li>
    );
}

TodoItem.propTypes = {
    id: PropTypes.number,
    completed: PropTypes.boolean,
    title: PropTypes.string,
    onChange: PropTypes.func,
}
