import React from 'react';
import './todo-input.css';

const TodoInput = (props) => <input className="c-todo-input" onChange={props.onChange} value={props.value} />

export default TodoInput;
