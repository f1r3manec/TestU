import usePreguntas from "../hooks/usePreguntas";
import PreguntasForm from "../ui/PreguntasForm";

export const AdmBDD = () => {
  const [
    handleInputValueSearch,
    listaPreguntas,
    handleInputSearch,
  ] = usePreguntas("ADMBDD");
  return (
    <>
      {listaPreguntas ? (
        <PreguntasForm
          inputValue={handleInputValueSearch}
          handleInputSearch={handleInputSearch}
          listaPreguntas={listaPreguntas}
          nombreMateria={"Administración de Base de Datos"}
        />
      ) : (
        <h2>Pregunta</h2>
      )}
    </>
  );
};
