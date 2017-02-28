import React, {Component} from 'react';
import TodoItem from '../todo-item/TodoItem';
import './todo-list.css';

class TodoList extends Component {
  render() {
    return <ul className="c-todo-list">
      { this.props.items.map( (item, index) => <TodoItem item={item} id={index} key={index} />) }
    </ul>
  }
}

export default TodoList;
