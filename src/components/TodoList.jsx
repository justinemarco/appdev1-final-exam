import React, { useState } from "react";
// TODO: Import TodoForm component
import TodoForm from './TodoForm';

import { useTodos } from "../context/TodoContext";

const TodoList = () => {
  const { todos, loading, toggleComplete, deleteTodo, addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {/* 
        TODO: Render TodoForm with the required props (addTodo, newTodo, setNewTodo)
      */}
      <TodoForm addTodo={addTodo} newTodo={newTodo} setNewTodo={setNewTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* 
              TODO: Apply conditional styling for completed todos (e.g., strikethrough)
            */}
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
              onClick={() => toggleComplete(todo.id)}
            >
            {/* TODO: Make the todo title clickable to toggle its completion status */}
            {todo.title}
            </span>

            

            {/* TODO: Implement a delete button to remove a todo */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;