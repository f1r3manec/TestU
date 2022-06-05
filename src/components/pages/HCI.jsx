import usePreguntas from "../hooks/usePreguntas";
import PreguntasForm from "../ui/PreguntasForm";

const HCI = () => {
  const [
    handleInputValueSearch,
    listaPreguntas,
    handleInputSearch,
  ] = usePreguntas("HCI");
  return (
    <>
      {listaPreguntas ? (
        <PreguntasForm
          inputValue={handleInputValueSearch}
          handleInputSearch={handleInputSearch}
          listaPreguntas={listaPreguntas}
          nombreMateria={"Iteracción Humano Computador"}
        />
      ) : (
        <h2>Pregunta</h2>
      )}
    </>
  );
};

export default HCI;
