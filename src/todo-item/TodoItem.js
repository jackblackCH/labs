import React from 'react';
import './todo-item.css';

const TodoItem = (props) =>
    <label htmlFor={props.id}>
      <input onClick={props.onClick} className="c-todo-item__checkbox" id={props.id} type='checkbox' checked={!!props.checked} />
      <span className="c-todo-item__text">{props.text}</span>
    </label>

export default TodoItem;
