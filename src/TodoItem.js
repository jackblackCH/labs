/**
 * This component should render a todo item as an <input type="checkbox" /> with a label
 */
import React from 'react';

const TodoItem = ({item, id}) => <li><label htmlFor={id}><input id={id} type='checkbox' defaultChecked={!!item.checked} />{item.text}</label></li>

export default TodoItem;
