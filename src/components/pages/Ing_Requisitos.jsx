import { memo } from "react";
import usePreguntas from "../hooks/usePreguntas";
import PreguntasForm from "../ui/PreguntasForm";

const Ing_Requisitos = memo(() => {
  const [
    handleInputValueSearch,
    listaPreguntas,
    handleInputSearch,
  ] = usePreguntas("IngRequisitos");
  return (
    <>
      {listaPreguntas ? (
        <PreguntasForm
          inputValue={handleInputValueSearch}
          handleInputSearch={handleInputSearch}
          listaPreguntas={listaPreguntas}
          nombreMateria={"Ingeniería de Requisitos"}
        />
      ) : (
        <h2>Pregunta</h2>
      )}
    </>
  );
});

export default Ing_Requisitos;
