import { preguntasMaterias } from "../../assets/preguntas";

export const buscarElementos = (materia, string) => {
  const texto = string.toLowerCase();

  const coincidencias = preguntasMaterias.filter((pregunta) => {
    const expresion = new RegExp(`${texto}`, "gim");
    return pregunta.pregunta.match(expresion) && pregunta.materia === materia;
  });

  return coincidencias;
};
