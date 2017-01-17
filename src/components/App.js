import React from 'react';
import '../style/App.css';
import TodoList from './TodoList';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <h1>Todo List</h1>
    <TodoList />
    <Footer />
  </div>
);

export default App;
