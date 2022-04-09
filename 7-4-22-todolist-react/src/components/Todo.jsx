import React from "react";
import TodoList from "./TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import styles from "./Todo.module.css";

const Todo = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [disable, setDisable] = useState(false);
  const [dayButton, setDayButton] = useState(true);

  const hanleInput = (event) => {
    setInput(event.target.value);
  };

  const addItem = () => {
    let payload = {
      title: input,
      id: uuidv4(),
    };
    setList([payload, ...list]);
    setInput("");
    setDisable(false);
  };

  const deleteItem = (id) => {
    let newList = list.filter((elem) => {
      return elem.id !== id;
    });
    setList(newList);
  };
  const handleEdit = (value, id) => {
    setInput(value);
    deleteItem(id);
    setDisable(true);
  };

  return (
    <div
      id={styles.todo}
      className={dayButton ? styles.cyanColor : styles.blackColor}
    >
      <button
        onClick={() => setDayButton(!dayButton)}
        className={dayButton ? null : styles.btnBack}
      >
        {dayButton ? <BsSunFill /> : <BsFillMoonFill />}
      </button>
      <h1>TODOLIST</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <input type="text" value={input} onChange={hanleInput} autoFocus />
        <button onClick={input.trim().length !== 0 ? addItem : null}>
          Add
        </button>
        <TodoList
          list={list}
          deleteItem={deleteItem}
          handleEdit={handleEdit}
          disable={disable}
        />
      </form>
    </div>
  );
};

export default Todo;
