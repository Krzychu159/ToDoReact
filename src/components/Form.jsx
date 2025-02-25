/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Form.css";

export const Form = ({
  onAddTask,
  isEditing,
  setIsEditing,
  editedTaskIndex,
  setEditedTaskIndex,
  tasks,
}) => {
  const today = new Date().toISOString().split("T")[0];
  const [name, setName] = useState("");
  const [date, setDate] = useState(today);

  useEffect(() => {
    if (isEditing && editedTaskIndex !== null) {
      setName(tasks[editedTaskIndex]?.name || "");
      setDate(tasks[editedTaskIndex]?.date || today);
    }
  }, [isEditing, editedTaskIndex, tasks, today]);

  return (
    <div id="addForm">
      <h2>{isEditing ? "Edytuj zadanie" : "Dodaj zadanie"}</h2>{" "}
      {/* 🔹 Dynamiczny nagłówek */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddTask({ name, date });
          setDate(today);
          setName(""); // 🔹 Czyścimy nazwę zadania
          setIsEditing(false);
          setEditedTaskIndex(null); // 🔹 Resetujemy `editedTaskIndex`
        }}
      >
        <div className="formName">
          <label htmlFor="name">Nazwa zadania: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="formDate">
          <label htmlFor="date">Data dodania: </label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
            id="date"
          />
        </div>
        <button className="formButton" disabled={name.length === 0}>
          {isEditing ? "Zapisz" : "Dodaj"}
        </button>
      </form>
    </div>
  );
};
