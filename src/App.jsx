import React from 'react';
import TodoList from './TodoList'; git
import AddTodoForm from './AddTodoForm'; 

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm /> 
      <TodoList /> 
    </div>
  );
}

export default App;



