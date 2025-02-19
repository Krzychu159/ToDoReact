/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Form.css";

export const Form = ({ onAddTask }) => {
  const today = new Date().toISOString().split("T")[0];
  const [name, setName] = useState("");
  const [date, setDate] = useState(today);
  return (
    <div id="addForm">
      <h2>Dodaj zadanie</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddTask({ name, date });
          setDate(today);
        }}
      >
        <div className="formName">
          <label htmlFor="name">Nazwa zadania: </label>
          <input
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="formDate">
          <label htmlFor="date">Data dodania: </label>
          <input
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="date"
            name="date"
            id="date"
          />{" "}
        </div>
        <button className="formButton" disabled={name.length === 0}>
          Dodaj
        </button>
      </form>
    </div>
  );
};
