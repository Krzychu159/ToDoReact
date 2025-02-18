import { useState } from "react";

export const Form = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  return (
    <>
      <h2>Dodaj zadanie</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddTask({ name, date });
        }}
      >
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
        <br />
        <label htmlFor="date">Data dodania: </label>
        <input
          defaultValue={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          type="date"
          name="date"
          id="date"
        />{" "}
        <br />
        <button disabled={name.length === 0}>Dodaj</button>
      </form>
    </>
  );
};
