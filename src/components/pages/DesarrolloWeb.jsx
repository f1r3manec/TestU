import React, { useState } from "react";
import { preguntasMaterias } from "../../assets/preguntas";
import { buscarElementos } from "../helpers/helpers";
import Questions from "../ui/Questions";

const DesarrolloWeb = () => {
  const [inputValue, setInputValue] = useState("");

  const initialState = preguntasMaterias.filter(
    (pregunta) => pregunta.materia === "DESWEB"
  );
  const [preguntasDESWEB, setPreguntasDESWEB] = useState(initialState);

  const handleInputSearch = (e) => {
    setInputValue(e.target.value);
    setPreguntasDESWEB(buscarElementos("DESWEB", e.target.value));
  };

  return (
    <>
      <Questions
        inputValue={inputValue}
        handleInputSearch={handleInputSearch}
        coleccion={preguntasDESWEB}
      />
    </>
  );
};

export default DesarrolloWeb;
