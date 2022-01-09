import React from 'react';

import PropTypes from 'prop-types';

import { TodoItem } from "../TodoItem/TodoItem";

import './TodoList.css'

export const TodoList = (props) => {
    const { list, onToggle } = props;
    return (
        <ul className="list">
            { list.map((item) => <TodoItem key={`item-${item.id}`} {...item} onChange={onToggle} />) }
        </ul>
    );
};

TodoList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    onToggle: PropTypes.func,
}
