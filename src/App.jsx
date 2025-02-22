import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

function App() {
  const initialTasks = [
    { name: "Pranie", date: "2025-02-02", done: false },
    { name: "Sprzątanie", date: "2025-02-02", done: false },
    { name: "Prasowanie", date: "2025-02-02", done: true },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskIndex, setEditedTaskIndex] = useState(null);

  const addTask = (data) => {
    if (isEditing === false) {
      const newTask = { ...data, done: false };
      setTasks([...tasks, newTask]);
    } else {
      // 🔹 Aktualizacja istniejącego zadania
      setTasks((prevTasks) =>
        prevTasks.map((task, index) =>
          index === editedTaskIndex ? { ...task, ...data } : task
        )
      );

      setIsEditing(false); // 🔹 Po edycji wracamy do trybu dodawania
      setEditedTaskIndex(null); // 🔹 Resetujemy indeks edytowanego zadania
    }
  };

  const toggleTask = (indexToToggle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) =>
        index === indexToToggle ? { ...task, done: !task.done } : task
      )
    );
  };

  const removeTask = (indexToRemove) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToRemove)
    );

    // 🔹 Jeśli usuwamy edytowane zadanie, resetujemy edycję
    if (editedTaskIndex === indexToRemove) {
      setIsEditing(false);
      setEditedTaskIndex(null);
    }
  };

  return (
    <section>
      <h1>ToDo List</h1>
      <Form
        onAddTask={addTask}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editedTaskIndex={editedTaskIndex}
        setEditedTaskIndex={setEditedTaskIndex}
        tasks={tasks}
      />
      <Table
        tasks={tasks}
        onToggleTask={toggleTask}
        setIsEditing={setIsEditing}
        setEditedTaskIndex={setEditedTaskIndex}
        onRemoveTask={removeTask}
      />{" "}
    </section>
  );
}

export default App;
