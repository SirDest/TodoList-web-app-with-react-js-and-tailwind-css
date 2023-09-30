import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListItems from "./ListItems";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const MainTodo = () => {
  const [todos, setTodos] = useState([]);
  const addTodos = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), todoTask: todo, completed: false, editingItem: false },
    ]);
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodoItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-[#e2d5de] w-full h-screen flex items-center ">
      <div className="w-[300px] min-h-[500px] bg-white m-auto p-8">
        <p className="text-center text-3xl font-semibold">Todo List</p>
        <AddTodo addTodos={addTodos} />
        {todos.map((items, index) => (
          <ListItems
            items={items}
            key={index}
            toggleCompletion={toggleCompletion}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
    </div>
  );
};

export default MainTodo;
