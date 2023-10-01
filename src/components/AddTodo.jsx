import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";

const AddTodo = ({ addTodos }) => {
  const [value, setValue] = useState("");
  const inputChange = (e) => {
    const input = e.target.value;
    setValue(input);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      addTodos(value);
      setValue("");
    } else return;
  };

  return (
    //   This form is to add new list items to the list of items in the todo
    <form
      className="mt-2 m-auto h-fit w-fit flex justify-between bg-[#e2d5de]"
      onSubmit={submitForm}
    >
      <input
        type="text"
        placeholder="Add Something"
        className=" bg-[#e2d5de] px-3 py-3 outline-none"
        onChange={inputChange}
        value={value}
      />
      <button type="submit" className="bg-[#3b71ca] px-5 group">
        <GrFormAdd className="group-hover:scale-150 ease-in-out duration-300" />
      </button>
    </form>
  );
};

export default AddTodo;
