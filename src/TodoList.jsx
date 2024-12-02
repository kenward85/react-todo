import React from 'react';
import TodoListItem from './TodoListItem'; 

const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Buy groceries" },
  { id: 3, title: "Schedule a meeting" },
];

function TodoList() {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} /> 
      ))}
    </ul>
  );
}

export default TodoList;
