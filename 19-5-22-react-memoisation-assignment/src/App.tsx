import React, { useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import TodoItem from "./Components/TodoItem";

var randomColor = require("randomcolor");
export type TodoType = {
  id?: string;
  title?: string;
  body?: string;
  verify?: boolean;
  color?: string;
};

function App() {
  const [time, setTime] = useState(0);
  const [text, setText] = useState<TodoType>({ title: "", body: "" });
  const [allTodos, setAllTodos] = useState<TodoType[]>([]);
  const ref = useRef<any>(null);

  const startTimer = () => {
    ref.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(ref.current);
  };
  useEffect(() => {
    startTimer();
  }, []);


  const handleStatus = (id:string | undefined) => {
    let newAllTodo:TodoType[] = allTodos.map(elem => {
      if (elem.id === id) {
        return { ...elem, verify: !elem.verify };
      } else {
        return elem;
        }
    })
    setAllTodos(newAllTodo);
  }

  const delayFunction = () => {
    let num = 0;
    console.log("delay function");
    while (num !== 10000000) num++;
    let color = randomColor();
    return color;
  };
  let memoColor = useMemo(() => delayFunction(), [allTodos.length]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let name = event.target.name;
    setText({
      ...text,
      id: uuid(),
      [name]: event.target.value,
      verify: false,
      color: memoColor,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAllTodos([...allTodos, text]);
    setText({ title: "", body: "" });
  };
  return (
    <div className="App">
      <h1>Count:{time}</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text.title}
          name="title"
          onChange={handleChange}
        />
        <br />
        <textarea name="body" value={text.body} onChange={handleChange} />
        <br />
        <input type="submit" />
      </form>
      {allTodos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} handleStatus={handleStatus} />;
      })}
    </div>
  );
}

export default App;
