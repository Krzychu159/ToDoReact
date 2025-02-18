import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

function App() {
  const initailTasks = [
    { name: "Pranie", date: "2025-02-02" },
    { name: "Sprzątanie", date: "2025-02-02" },
    { name: "Prasowanie", date: "2025-02-02" },
  ];

  const [tasks, setTasks] = useState(initailTasks);

  const addTask = (data) => {
    const newTasks = [...tasks, data];
    setTasks(newTasks);
  };

  const removeTask = (indexToRemove) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <Form onAddTask={addTask} />
      <Table tasks={tasks} onRemoveTask={removeTask} />
    </>
  );
}

export default App;
