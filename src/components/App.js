import React from 'react';
import '../style/App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <h1 className="title">Todo List</h1>
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
);

export default App;
