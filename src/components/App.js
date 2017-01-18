import React from 'react';
import '../style/App.css';
import TodoForm from './TodoForm';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <h1>Todo List</h1>
    <TodoForm />
    <Footer />
  </div>
);

export default App;
