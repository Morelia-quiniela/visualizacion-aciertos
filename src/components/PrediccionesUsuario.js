import React from 'react';
import './SimuladorResultados.css';

const PrediccionesUsuario = ({ partidos, resultadosReales, predicciones, setPredicciones }) => {
  const aciertos = predicciones.reduce((count, prediccion, index) => {
    return prediccion === resultadosReales[index] ? count + 1 : count;
  }, 0);

  const handleSelectChange = (index, value) => {
    const nuevasPredicciones = [...predicciones];
    nuevasPredicciones[index] = value;
    setPredicciones(nuevasPredicciones);
  };

  return (
    <div className="predicciones">
      {partidos.map((partido, index) => (
        <div key={partido.id} className="partido">
          <div className="logos">
            <img src={partido.logoLocal} alt="Logo Local" />
            <span>vs</span>
            <img src={partido.logoVisitante} alt="Logo Visitante" />
          </div>
          <select 
            value={predicciones[index]} 
            disabled
            className={predicciones[index] === resultadosReales[index] ? 'correcto' : ''}
          >
            <option value=""></option>
            <option value="L">L</option>
            <option value="E">E</option>
            <option value="V">V</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default PrediccionesUsuario;
