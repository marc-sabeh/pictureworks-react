import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';

const App = props => (
  <TodoList
    items={props.items}
    onItemClick={(item, event) => {
      console.log(item, event);
    }}
  />
);
export default App;
