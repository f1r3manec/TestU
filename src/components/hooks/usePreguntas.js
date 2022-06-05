import { useState } from "react";
import { buscarElementos } from "../helpers/helpers";
import { preguntasMaterias } from "../../assets/preguntas";

const usePreguntas = (materia) => {
  const [handleInputValueSearch, setHandleInputValueSearch] = useState("");

  const initialState = preguntasMaterias.filter(
    (pregunta) => pregunta.materia === materia
  );

  const [listaPreguntas, setListaPreguntas] = useState(initialState);

  const handleInputSearch = (e) => {
    setHandleInputValueSearch(e.target.value);
    setListaPreguntas(buscarElementos(materia, e.target.value));
    if (e.target.value.length === 0) {
      setListaPreguntas(initialState);
    }
  };

  return [handleInputValueSearch, listaPreguntas, handleInputSearch];
};

export default usePreguntas;
