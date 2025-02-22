/* eslint-disable react/prop-types */
import "./Table.css";

export function Table({
  tasks,
  onToggleTask,
  setIsEditing,
  setEditedTaskIndex,
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
              <td
                style={{
                  color:
                    new Date(task.date) < new Date("2024-01-01")
                      ? "red"
                      : "white",
                }}
              >
                {task.date}
              </td>
              <td className="operations">
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setEditedTaskIndex(index); // 🔹 Przechowujemy indeks edytowanego zadania
                  }}
                >
                  Edytuj
                </button>

                {/* 🔹 Zmiana `h2` */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
