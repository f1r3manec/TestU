import usePreguntas from "../hooks/usePreguntas";
import PreguntasForm from "../ui/PreguntasForm";
const FundamentosIngenieria = () => {
  const [
    handleInputValueSearch,
    listaPreguntas,
    handleInputSearch,
  ] = usePreguntas("FIS");
  return (
    <>
      {listaPreguntas ? (
        <PreguntasForm
          inputValue={handleInputValueSearch}
          handleInputSearch={handleInputSearch}
          listaPreguntas={listaPreguntas}
          nombreMateria={"Fundamentos Ingeniría Software"}
        />
      ) : (
        <h2>Pregunta</h2>
      )}
    </>
  );
};

export default FundamentosIngenieria;
