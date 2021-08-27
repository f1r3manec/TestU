import React, { memo, useState } from "react";
import { preguntasMaterias } from "../../assets/preguntas";
import { buscarElementos } from "../helpers/helpers";

import PreguntaCard from "../ui/PreguntaCard";

const RedesII = memo(() => {
  const [inputValue, setInputValue] = useState("");

  const initialState = preguntasMaterias.filter(
    (pregunta) => pregunta.materia === "RedesII"
  );
  const [preguntasRedesII, setPreguntasRedesII] = useState(initialState);

  const handleInputSearch = (e) => {
    setInputValue(e.target.value);
    setPreguntasRedesII(buscarElementos("RedesII", e.target.value));
  };
  return (
    <div className="column is-12 is-desktop is-mobile is-widescreen is-fullhd has-background-grey-dark">
      <div className="container mt-3">
        <div className="column is-5 is-offset-3">
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
        <div className="columns is-multiline">
          {preguntasRedesII.map((pre, index) => (
            <PreguntaCard key={pre.id} {...pre} numPregunta={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default RedesII;
