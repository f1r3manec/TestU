import React, { memo } from "react";
import usePreguntas from "../hooks/usePreguntas";
import PreguntasForm from "../ui/PreguntasForm";

export const PlanificacionEst = memo(() => {
  const [
    handleInputValueSearch,
    listaPreguntas,
    handleInputSearch,
  ] = usePreguntas("PlanificacionEst");
  return (
    <>
      {listaPreguntas ? (
        <PreguntasForm
          inputValue={handleInputValueSearch}
          handleInputSearch={handleInputSearch}
          listaPreguntas={listaPreguntas}
          nombreMateria={"Planificacion Estrategica"}
        />
      ) : (
        <h2>Pregunta</h2>
      )}
    </>
  );
});
