import React from 'react';
import './todo-item.css';

const TodoItem = ({item, id}) => <li className="c-todo-item"><label htmlFor={id}><input className="c-todo-item__checkbox" id={id} type='checkbox' defaultChecked={!!item.checked} /><span class="c-todo-item__text">{item.text}</span></label></li>

export default TodoItem;
