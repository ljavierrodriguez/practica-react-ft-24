import React, { useState } from "react";
import Formulario from "./Formulario";
import Header from "./Header";
import InputForm from "./InputForm";
import { useEffect } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = (e) => {
    if (task !== "" && e.key === "Enter") {
      if (todos.includes(task)) return;
      /* const newTodos = [...todos];
      newTodos.push(task)
      setTodos(newTodos) */
      setTodos((todos) => [...todos, task]);
      setTask("");
    }
  };

  useEffect(() => {
    
  }, []);

  const [show, setShow] = useState(false);
  const [error, setError] = useState({ message: "Ha ocurrido un error" });
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [continuar, setContinuar] = useState(false);

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeLastname = (e) => setLastname(e.target.value);

  return (
    <>
      {!!error && <h1>{error.message}</h1>}
      {show ? <h1>Mostrando contenido</h1> : <h1>Contenido Oculto</h1>}
      <button className={`btn btn-sm btn-${show ? "danger" : "primary"}`}>
        {show ? "ocultar" : "mostrar"}
      </button>

      {name !== "" && lastname !== "" && continuar ? (
        <Header name={name} lastname={lastname} />
      ) : (
        <>
          <Formulario
            name={name}
            lastname={lastname}
            handleChangeName={handleChangeName}
            handleChangeLastname={handleChangeLastname}
            setContinuar={setContinuar}
          />
        </>
      )}

      <p>Task: {task}</p>
      <InputForm task={task} setTask={setTask} addTask={addTask} />
    </>
  );
};

export default App;
