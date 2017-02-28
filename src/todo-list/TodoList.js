/**
 * This component should render the TodoItems inside a <li>
 */
import React from 'react';
import TodoItem from '../todo-item/TodoItem';
import './todo-list.css';

const TodoList = (props) =>
<ul className="c-todo-list">
  { props.items.map( (item, index) => <TodoItem item={item} id={index} key={index} />) }
</ul>

export default TodoList;
