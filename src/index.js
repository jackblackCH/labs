import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todo-list/TodoList';
import TodoInput from './todo-input/TodoInput';
import WithItems from './HOC/WithItems';
import items from './models/model';
import './app.css';

const Root = (props) => (
  <div className="c-app">
    <form onSubmit={props.addItem}>
      <TodoList items={props.items} updateItem={props.updateItem} />
      <TodoInput value={props.inputValue} onChange={props.updateInputValue} />
    </form>
  </div>
)

const App = WithItems(Root);

ReactDOM.render(
  <App items={items} />,
  document.getElementById('root')
);
