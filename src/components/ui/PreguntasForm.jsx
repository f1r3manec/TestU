import PreguntaCard from "./PreguntaCard";

const PreguntasForm = ({
  inputValue,
  handleInputSearch,
  listaPreguntas,
  nombreMateria,
}) => {
  return (
    <div className="column is-12 is-desktop is-mobile is-widescreen is-fullhd has-background-grey-dark">
      <div className="container m-3">
        <div className="columns is is-multiline">
          <div className="column  ">
            <h3 className="has-text-info title is-3">{nombreMateria}</h3>
            <p>
              <input
                type="text"
                className="input is-success"
                placeholder="busqueda"
                name="busqueda"
                onChange={handleInputSearch}
                value={inputValue}
              />
            </p>
          </div>
          <div className="column is-12 is-offset-1 is-12 is-desktop is-mobile is-widescreen is-fullhd has-background-grey-dark">
            <div className="columns is-multiline">
              {listaPreguntas.map((pre, index) => (
                <PreguntaCard key={pre.id} {...pre} numPregunta={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreguntasForm;
