import React from "react";
import { useGlobalContext } from "../context";

const Main = () => {
  const { setRicerca } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setRicerca(e.target[0].value);
  };
  return (
    <>
      <section className="ricerca">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="city">Scrivi il nome della citta:</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Write in english please."
          />

          <button className="btn btn-warning fw-bold" type="submit">
            Cerca
          </button>
        </form>
      </section>
    </>
  );
};

export default Main;
