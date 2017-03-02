/**
 * This component should render the TodoItems inside a <li>
 */
import React from 'react';
import TodoItem from '../todo-item/TodoItem';
import './todo-list.css';

const TodoList = (props) =>
<ul className="c-todo-list">
      { props.items.map( (item, index) =>
        <li className="c-todo-item" key={index}>
          <TodoItem onClick={props.updateItem} text={item.text} checked={item.checked} id={index} />
        </li>
      )}
</ul>

export default TodoList;
