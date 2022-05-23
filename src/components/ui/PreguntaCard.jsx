import React from "react";

const PreguntaCard = ({
  pregunta,
  bimestre,
  respuesta,
  numPregunta,
  url = null,
}) => {
  return (
    <div className="column is-5 ">
      <div className="container">
        <div className="message is-info is-small">
          <div className="message-header">
            <p>Pregunta {numPregunta}</p>
            <span>{bimestre} Bimestre</span>
          </div>
          <div className="message-body">
            {pregunta}
            {url && <img src={url} alt="preguntas" />}
          </div>
          <div className="message-body has-background-warning  has-text-Success">
            <p>
              <strong>Respuesta: </strong>
              {respuesta !== "" ? (
                <span> {respuesta}</span>
              ) : (
                <span className="has-text-danger">"ATENDER!!!"</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreguntaCard;
