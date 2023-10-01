import React, { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";

const EditTodo = ({ editItem, items }) => {
  const { id, todoTask } = items;

  const [value, setValue] = useState(todoTask);
  const inputChange = (e) => {
    const input = e.target.value;
    setValue(input);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      editItem(value, id);
      setValue("");
    } else return;
  };
  return (
    <form
      className="mt-2 h-fit flex justify-between bg-gray-300"
      onSubmit={submitForm}
    >
      <input
        type="text"
        placeholder="Update Task"
        className=" bg-gray-300 pl-3 py-3 outline-none"
        onChange={inputChange}
        value={value}
      />
      <button type="submit" className="bg-[#3b71ca] px-5 group">
        <AiOutlineUpload className="group-hover:scale-150 ease-in-out duration-300" />
      </button>
    </form>
  );
};

export default EditTodo;
