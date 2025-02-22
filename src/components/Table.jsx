/* eslint-disable react/prop-types */
import "./Table.css";

export function Table({
  tasks,
  onToggleTask,
  setIsEditing,
  setEditedTaskIndex,
  onRemoveTask,
}) {
  return (
    <div className="table-container">
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
          {tasks.map((task, index) => (
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
