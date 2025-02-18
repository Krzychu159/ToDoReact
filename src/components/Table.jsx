/* eslint-disable react/prop-types */

export function Table({ tasks, onRemoveTask }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Data</th>
          <th>Operacje</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.name}</td>
            <td>{task.date}</td>
            <td>
              <button onClick={() => onRemoveTask(index)}>Usuń</button>
              <button>Edytuj</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
