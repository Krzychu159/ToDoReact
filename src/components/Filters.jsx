/* eslint-disable react/prop-types */

export function Filters({ setSortBy, setDoneFilter, setDateFilter }) {
  return (
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
  );
}
