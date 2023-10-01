import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListItems from "./ListItems";
import { v4 as uuidv4 } from "uuid";
import EditTodo from "./EditTodo";
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

  const editTodoItem = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editingItem: !todo.editingItem } : todo
      )
    );
  };
  const editItem = (value, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, todoTask: value, editingItem: false, completed: false }
          : todo
      )
    );
  };
  return (
    <div className="bg-[#e2d5de] w-full h-screen flex items-center ">
      <div className="w-full md:w-fit min-h-[50%] bg-white m-auto p-8">
        <p className="text-center text-3xl font-semibold">Todo List</p>
        <AddTodo addTodos={addTodos} />

        {todos.map((items, index) =>
          items.editingItem ? (
            <EditTodo editItem={editItem} items={items} key={index} />
          ) : (
            <ListItems
              items={items}
              key={index}
              toggleCompletion={toggleCompletion}
              deleteTodoItem={deleteTodoItem}
              editTodoItem={editTodoItem}
            />
          )
        )}
      </div>
    </div>
  );
};

export default MainTodo;
