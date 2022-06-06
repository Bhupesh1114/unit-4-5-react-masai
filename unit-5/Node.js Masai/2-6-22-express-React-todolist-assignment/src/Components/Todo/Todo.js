import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {v4 as uuid } from "uuid";
import { addTodo,getTodos,deleteTodo } from "./TodoAction";
import TodoItem from "./TodoItem";


const Todo = ({darkMode}) => {
    const [todo, setTodo] = useState("");
    const state = useSelector((state) => state.TodoReducer.allTodos);
    const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();
      if (todo.trim().length > 0) {
        dispatch(addTodo({ id: uuid(), title: todo }));
        setTodo("");   
      }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  useEffect(() => {
  dispatch(getTodos())
  },[])
    return (
 <TODO>
      <h1 className={darkMode ? "tomato" : null}>TodoList</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" value="Add" />
            </form>
            {state.map(todo => {
                return <TodoItem key={todo.id} {...todo} handleDelete={handleDelete} />
            })}
            </TODO>
         
   
  );
};
export default Todo;

export const TODO = styled.div`
  h1 {
    text-align: center;
    margin: 20px 0px;
    letter-spacing: 10px;
  }
  form {
    width: 400px;
    background-color: tomato;
    padding: 20px;
    border-radius: 5px;
    input:first-child {
      width: 76%;
      padding: 10px;
      border-radius: 5px;
      border: none;
      font-size: 20px;
      outline: none;
    }
    input[type="submit"] {
      padding: 10px 20px;
      font-size: 20px;
      border-radius: 5px;
      border: none;
      margin-left: 10px;
      background-color: #fff;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      background-color: #000;
      color: #fff;
    }
    input[type="submit"]:active {
      transform: scale(0.9);
    }
  }
`;
