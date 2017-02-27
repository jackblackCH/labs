/**
 * This component should render the TodoItems inside a <li>
 */
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) =>
<ul>
  { props.items.map( (item, index) => <TodoItem item={item} id={index} key={index} />) }
</ul>

export default TodoList;
