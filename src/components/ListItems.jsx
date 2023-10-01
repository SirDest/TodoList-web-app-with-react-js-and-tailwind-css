import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const ListItems = ({
  items,
  toggleCompletion,
  deleteTodoItem,
  editTodoItem,
}) => {
  const { id, todoTask, completed } = items;

  return (
    <div className="mt-1 h-fit flex justify-between border-b-2 border-solid	border-gray-300">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => toggleCompletion(id)}
      >
        <input type="checkbox" checked={completed ? true : false} />
        <div className="text-gray-700 pl-3 py-3 outline-none first-letter:uppercase lowercase">
          <p
            style={{
              textDecoration: completed ? "line-through" : "none",
              color: completed ? "red" : "grey",
            }}
          >
            {todoTask}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            editTodoItem(id);
          }}
          className="bg-none group"
        >
          <AiOutlineEdit className="text-green-700 group-hover:scale-150 ease-in-out duration-300" />
        </button>
        <button
          type="button"
          onClick={() => {
            deleteTodoItem(id);
          }}
          className="bg-none group"
        >
          <AiOutlineDelete className="text-red-700 group-hover:scale-150 ease-in-out duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ListItems;
