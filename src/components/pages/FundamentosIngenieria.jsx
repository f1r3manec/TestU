import React from "react";
import { preguntasMaterias } from "../../assets/preguntas";
import PreguntaCard from "../ui/PreguntaCard";

const FundamentosIngenieria = () => {
  const preguntasFIS = preguntasMaterias.filter(
    (pregunta) => pregunta.materia === "FIS"
  );
  return (
    <div className="column is-12 is-desktop is-mobile is-widescreen is-fullhd has-background-grey-dark">
      <div className="container m-3">
        <div className="columns is-multiline">
          {preguntasFIS.map((pre, index) => (
            <PreguntaCard key={pre.id} {...pre} numPregunta={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundamentosIngenieria;
