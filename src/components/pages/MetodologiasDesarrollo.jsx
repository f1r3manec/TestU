import usePreguntas from "../hooks/usePreguntas";
import PreguntasForm from "../ui/PreguntasForm";
import { memo } from "react";
const MetodologiasD = memo(() => {
  const [
    handleInputValueSearch,
    listaPreguntas,
    handleInputSearch,
  ] = usePreguntas("MetodologiasD");
  return (
    <>
      {listaPreguntas ? (
        <PreguntasForm
          inputValue={handleInputValueSearch}
          handleInputSearch={handleInputSearch}
          listaPreguntas={listaPreguntas}
          nombreMateria={"Metodologias Desarrollo"}
        />
      ) : (
        <h2>Pregunta</h2>
      )}
    </>
  );
});

export default MetodologiasD;
