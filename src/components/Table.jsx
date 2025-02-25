/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Table.css";

export function Table({
  tasks,
  onToggleTask,
  setIsEditing,
  setEditedTaskIndex,
  onRemoveTask,
}) {
  const [sortBy, setSortBy] = useState("Nazwa");
  const [doneFilter, setDoneFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === "Nazwa") {
      return a.name.localeCompare(b.name);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  const filteredByDoneTasks = [...sortedTasks].filter((element) => {
    if (doneFilter === "all") {
      return true;
    } else if (doneFilter === "done") {
      if (element.done === true) {
        return element;
      } else {
        return false;
      }
    } else {
      if (element.done === false) {
        return element;
      } else {
        return false;
      }
    }
  });

  const filteredFinalTasks = [...filteredByDoneTasks].filter((element) => {
    if (dateFilter === "") {
      return element;
    } else if (dateFilter === element.date) {
      return element;
    } else {
      return false;
    }
  });

  return (
    <div className="table-container">
      <div className="manage-table">
        <div className="manage-line">
          <label htmlFor="sort">Sortuj: </label>
          <select
            name="sort"
            id="sort"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Nazwa">Nazwa</option>
            <option value="Data">Data</option>
          </select>
        </div>
        <div className="manage-line">
          <label>Filtruj wykonane: </label>
          <select
            name="isDone"
            id="isDone"
            onChange={(e) => setDoneFilter(e.target.value)}
          >
            <option value="all">Wszystkie</option>
            <option value="done">Zrobione</option>
            <option value="toDo">Do zrobienia</option>
          </select>
        </div>
        <div className="manage-line">
          <label htmlFor="filter-date">Filtruj po dacie: </label>
          <input
            type="date"
            id="filter-date"
            onChange={(e) => setDateFilter(e.target.value)}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Wykonane</th>
            <th>Nazwa</th>
            <th>Data</th>
            <th className="operations">Operacje</th>
          </tr>
        </thead>
        <tbody>
          {filteredFinalTasks.map((task, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => onToggleTask(index)}
                />
              </td>
              <td
                style={{ textDecoration: task.done ? "line-through" : "none" }}
              >
                {task.name}
              </td>
              <td>{task.date}</td>
              <td className="operations">
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setEditedTaskIndex(index);
                  }}
                >
                  Edytuj
                </button>
                <button onClick={() => onRemoveTask(index)}>Usuń</button>{" "}
                {/* 🔹 Obsługa usuwania */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
