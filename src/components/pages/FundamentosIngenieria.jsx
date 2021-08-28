import React, { useState } from "react";
import { preguntasMaterias } from "../../assets/preguntas";
import { buscarElementos } from "../helpers/helpers";
import PreguntaCard from "../ui/PreguntaCard";

const FundamentosIngenieria = () => {
  const [inputValue, setInputValue] = useState("");

  const initialState = preguntasMaterias.filter(
    (pregunta) => pregunta.materia === "FIS"
  );
  const [preguntasFIS, setPreguntasFIS] = useState(initialState);

  const handleInputSearch = (e) => {
    setInputValue(e.target.value);
    setPreguntasFIS(buscarElementos("FIS", e.target.value));
  };
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
              {preguntasFIS.map((pre, index) => (
                <PreguntaCard key={pre.id} {...pre} numPregunta={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundamentosIngenieria;
