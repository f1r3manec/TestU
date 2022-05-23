import React from "react";
import PreguntaCard from "./PreguntaCard";

const Questions = ({ inputValue, handleInputSearch, coleccion }) => {
  return (
    <div className="column is-12 is-desktop is-mobile is-widescreen is-fullhd has-background-grey-dark">
      <div className="container m-3">
        <div className="columns is is-multiline">
          <div className="column  ">
            <p>
              <input
                type="text"
                className="input is-success"
                placeholder="busqueda"
                name="busqueda"
                value={inputValue}
                onChange={handleInputSearch}
              />
            </p>
          </div>
          <div className="column is-12 is-offset-1 is-12 is-desktop is-mobile is-widescreen is-fullhd has-background-grey-dark">
            <div className="columns is-multiline">
              {coleccion.map((pre, index) => (
                <PreguntaCard key={pre.id} {...pre} numPregunta={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;
