/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Table.css";
import { Filters } from "./Filters"; // ✅ Import nowego komponentu

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
    if (sortBy === "Nazwa") return a.name.localeCompare(b.name);
    return new Date(a.date) - new Date(b.date);
  });

  const filteredByDoneTasks = sortedTasks.filter((task) => {
    if (doneFilter === "all") return true;
    return doneFilter === "done" ? task.done : !task.done;
  });

  const filteredFinalTasks = filteredByDoneTasks.filter((task) => {
    if (dateFilter === "") return true;
    return task.date === dateFilter;
  });

  return (
    <div className="table-container">
      <Filters
        setSortBy={setSortBy}
        setDoneFilter={setDoneFilter}
        setDateFilter={setDateFilter}
      />
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
          {filteredFinalTasks.map((task) => {
            const realIndex = tasks.findIndex(
              (t) => t.name === task.name && t.date === task.date
            );

            return (
              <tr key={`${task.name}-${task.date}`}>
                <td>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => onToggleTask(realIndex)}
                  />
                </td>
                <td
                  style={{
                    textDecoration: task.done ? "line-through" : "none",
                  }}
                >
                  {task.name}
                </td>
                <td>{task.date}</td>
                <td className="operations">
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setEditedTaskIndex(realIndex);
                    }}
                  >
                    Edytuj
                  </button>
                  <button onClick={() => onRemoveTask(realIndex)}>Usuń</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
