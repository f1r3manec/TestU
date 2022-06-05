import React, { memo } from "react";

import usePreguntas from "../hooks/usePreguntas";
import PreguntasForm from "../ui/PreguntasForm";

const RedesII = () => {
  const [
    handleInputValueSearch,
    listaPreguntas,
    handleInputSearch,
  ] = usePreguntas("RedesII");
  return (
    <>
      {listaPreguntas ? (
        <PreguntasForm
          inputValue={handleInputValueSearch}
          handleInputSearch={handleInputSearch}
          listaPreguntas={listaPreguntas}
          nombreMateria={"Redes de Dispositivos"}
        />
      ) : (
        <h2>Pregunta</h2>
      )}
    </>
  );
};

export default RedesII;
