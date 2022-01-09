import React, { useEffect } from 'react';

import Context from "./context";

import { TodoList } from './Todo/TodoList/TodoList';
import { AddTodo } from "./Todo/AddTodo/AddTodo";

import './App.css';

const App = () => {
    const [todos, setTodos] = React.useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
            })
    }, [])

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => {
                todo.id === id ? todo.completed = !todo.completed : todo.completed
                return todo;
            }
        ))
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const addTodo = (title) => {
        setTodos(todos.concat([{
            title: title,
            id: 4,
            completed: false,
        }]))
    }

    return (
        <Context.Provider value={{ removeTodo }} >
            <div className="wrapper">
                <h1>React hooks</h1>
                <AddTodo onCreate={ addTodo } />
                { todos.length ? <TodoList list={todos} onToggle={toggleTodo} /> : <h2> No todos! </h2> }
            </div>
        </Context.Provider>
    );
};


export default App;
