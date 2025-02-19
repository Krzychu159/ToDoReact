import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

function App() {
  const initailTasks = [
    { name: "Pranie", date: "2025-02-02", done: false },
    { name: "Sprzątanie", date: "2025-02-02", done: false },
    { name: "Prasowanie", date: "2025-02-02", done: true },
  ];

  const [tasks, setTasks] = useState(initailTasks);

  const addTask = (data) => {
    const newTask = { ...data, done: false }; // automatycznie na done false
    setTasks([...tasks, newTask]);
  };

  const removeTask = (indexToRemove) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks);
  };

  const toggleTask = (indexToToggle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) =>
        index === indexToToggle ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <section>
      <h1>ToDo List</h1>
      <Form onAddTask={addTask} />
      <Table
        tasks={tasks}
        onRemoveTask={removeTask}
        onToggleTask={toggleTask}
      />
    </section>
  );
}

export default App;
