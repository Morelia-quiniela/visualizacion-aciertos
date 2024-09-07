import React, { useState } from 'react';
import './SimuladorResultados.css';
import PrediccionesUsuario from './PrediccionesUsuario';

const resultadosReales = ['L', 'L', 'E', 'L', 'E', 'L', 'L', 'E', 'L', 'L'];

const partidos = [
  { id: 1, equipos: 'Francia vs Italia', logoLocal: process.env.PUBLIC_URL + '/club/Selecciones/francia.png', logoVisitante: process.env.PUBLIC_URL + '/club/Selecciones/italia.png' },
  { id: 2, equipos: 'Uruguay vs Paraguay', logoLocal: process.env.PUBLIC_URL + '/club/Selecciones/uruguay.png', logoVisitante: process.env.PUBLIC_URL + '/club/Selecciones/paraguay.png' },
  { id: 3, equipos: 'Brazil vs Ecuador', logoLocal: process.env.PUBLIC_URL + '/club/Selecciones/brasil.png', logoVisitante: process.env.PUBLIC_URL + '/club/Selecciones/ecuador.png' },
  { id: 4, equipos: 'Perú vs Colombia', logoLocal: process.env.PUBLIC_URL + '/club/Selecciones/peru.png', logoVisitante: process.env.PUBLIC_URL + '/club/Selecciones/colombia.png' },
  { id: 5, equipos: 'USA vs Canada', logoLocal: process.env.PUBLIC_URL + '/club/Selecciones/usa.png', logoVisitante: process.env.PUBLIC_URL + '/club/Selecciones/canada.png' },
  { id: 6, equipos: 'Mexico vs Nueva Zelanda', logoLocal: process.env.PUBLIC_URL + '/club/Selecciones/mexico.png', logoVisitante: process.env.PUBLIC_URL + '/club/Selecciones/nuevazelanda.png' },
  { id: 7, equipos: 'Dinamarca vs Serbia', logoLocal: process.env.PUBLIC_URL + '/club/Selecciones/dinamarca.png', logoVisitante: process.env.PUBLIC_URL + '/club/Selecciones/serbia.png' },
  { id: 8, equipos: 'Croacia vs Polonia', logoLocal: process.env.PUBLIC_URL + '/club/Selecciones/croacia.png', logoVisitante: process.env.PUBLIC_URL + '/club/Selecciones/polonia.png' },
  { id: 9, equipos: 'Portugal vs Escocia', logoLocal: process.env.PUBLIC_URL + '/club/Selecciones/portugal.png', logoVisitante: process.env.PUBLIC_URL + '/club/Selecciones/escocia.png' },
  { id: 10, equipos: 'Suiza vs España', logoLocal: process.env.PUBLIC_URL + '/club/Selecciones/suiza.png', logoVisitante: process.env.PUBLIC_URL + '/club/Selecciones/espana.png' },
];

const usuariosPredicciones = [
  { id: 1, nombre: 'José Alejandro', predicciones: ['L', 'L', 'L', 'V', 'L', 'L', 'L', 'L', 'V', 'V'] },
  { id: 2, nombre: 'José Alejandro', predicciones: ['V', 'L',	'L', 'V', 'L', 'L', 'E', 'E', 'L', 'V'] },
  { id: 3, nombre: 'Miguel Torres Ayala', predicciones: ['L', 'E', 'L', 'V', 'V', 'L', 'L', 'E', 'L', 'V'] },
  { id: 4, nombre: 'Chester', predicciones: ['V', 'V', 'L', 'E', 'L', 'E', 'E', 'V', 'E', 'L'] },
  { id: 5, nombre: 'Irma Armenta', predicciones: ['E', 'L', 'V', 'L', 'E', 'V', 'V', 'V', 'V', 'L'] },
  { id: 6, nombre: 'Zorrita', predicciones: ['L', 'E', 'L', 'L', 'L', 'L', 'E', 'L', 'L', 'V'] },
  { id: 7, nombre: 'El conejo', predicciones: ['E', 'L', 'L', 'V', 'E', 'L', 'L', 'L', 'L', 'V'] },
  { id: 8, nombre: 'Poncho', predicciones: ['L', 'L', 'L', 'V', 'L', 'L', 'L', 'L', 'L', 'V'] },
  { id: 9, nombre: 'Piñon', predicciones: ['L', 'V', 'L', 'V', 'L', 'L', 'V', 'L', 'L', 'V'] },
  { id: 10, nombre: 'Pyp', predicciones: ['V', 'L', 'L', 'V', 'E', 'L', 'L', 'E', 'L', 'L'] },
  { id: 11, nombre: 'Oscar Orozco', predicciones: ['L', 'L', 'L', 'V', 'L', 'L', 'L', 'L', 'L', 'V'] },
  { id: 12, nombre: 'Viejo', predicciones: ['L', 'L', 'L', 'V', 'L', 'L', 'L', 'E', 'L', 'V'] },
  { id: 13, nombre: 'Miguel Espinoza', predicciones: ['L', 'L', 'L', 'V', 'L', 'L', 'L', 'L', 'L', 'V'] },
  { id: 14, nombre: 'Jose V.G', predicciones: ['L', 'V', 'L', 'V', 'L', 'L', 'V', 'L', 'L', 'V'] },
  { id: 15, nombre: 'Luis Casanova', predicciones: ['L', 'L', 'L', 'V', 'L', 'L', 'L', 'L', 'L', 'V'] },
  { id: 16, nombre: 'Luis Casanova', predicciones: ['V', 'L', 'L', 'V', 'V', 'L', 'L', 'V', 'L', 'E'] },
  { id: 17, nombre: 'Luis Casanova', predicciones: ['E', 'L', 'L', 'V', 'E', 'L', 'L', 'L', 'L', 'L'] },
  { id: 18, nombre: 'Bot', predicciones: ['L', 'L', 'L', 'V', 'L', 'L', 'V', 'L', 'L', 'V'] },
  { id: 19, nombre: 'Bot 2', predicciones: ['L', 'L', 'L', 'V', 'E', 'V', 'L', 'V', 'L', 'V'] },
  { id: 20, nombre: 'Pokémon', predicciones: ['V', 'L', 'L', 'V', 'L', 'L', 'E', 'L', 'L', 'E'] },
  { id: 21, nombre: 'Adachi', predicciones: ['E', 'L', 'L', 'V', 'V', 'E', 'L', 'L', 'L', 'V'] },
  { id: 22, nombre: 'Reus', predicciones: ['L', 'L', 'V', 'V', 'V', 'V', 'E', 'L', 'L', 'V'] },
  { id: 23, nombre: '11', predicciones: ['E', 'L', 'V', 'E', 'L', 'E', 'L', 'V', 'L', 'V'] },
  { id: 24, nombre: 'Quinielas', predicciones: ['L', 'L', 'E', 'V', 'L', 'L', 'E', 'V', 'V', 'L'] },
  { id: 25, nombre: 'Hugoool', predicciones: ['V', 'L', 'V', 'L', 'V', 'L', 'V', 'L', 'V', 'L'] },
  { id: 26, nombre: 'Chucho', predicciones: ['L', 'L', 'L', 'V', 'L', 'L', 'L', 'E', 'L', 'V'] },
  { id: 27, nombre: 'Gabriel Moron', predicciones: ['L', 'L', 'L', 'V', 'L', 'L', 'L', 'L', 'L', 'V'] },
  { id: 28, nombre: 'Gabriel Moron', predicciones: ['E', 'L', 'E', 'E', 'E', 'L', 'L', 'L', 'L', 'V'] },
  { id: 29, nombre: 'Gabriel Moron', predicciones: ['L', 'L', 'L', 'E', 'E', 'L', 'L', 'L', 'L', 'V'] },
  { id: 30, nombre: 'Carmen', predicciones: ['V', 'E', 'V', 'L', 'L', 'L', 'L', 'V', 'V', 'V'] },
  { id: 31, nombre: 'Arturo Cortes López', predicciones: ['E', 'L', 'L', 'V', 'L', 'E', 'V', 'L', 'L', 'V'] },
  { id: 32, nombre: 'Colachonchito', predicciones: ['L', 'L', 'L', 'E', 'L', 'L', 'V', 'E', 'L', 'V'] },
  { id: 33, nombre: 'Qin Shi Huang', predicciones: ['L', 'L', 'E', 'L', 'E', 'L', 'L', 'E', 'L', 'L'] },
  { id: 34, nombre: 'Brunilda', predicciones: ['V', 'L', 'V', 'V', 'V', 'E', 'L', 'L', 'L', 'V'] },
  { id: 35, nombre: 'Ceruledge', predicciones: ['E', 'L', 'V', 'L', 'L', 'L', 'L', 'L', 'L', 'L'] },
  { id: 36, nombre: 'Andres Uribe Joffre', predicciones: ['L', 'L', 'L', 'V', 'L', 'L', 'L', 'E', 'E', 'V'] },
  { id: 37, nombre: 'Diego Torres', predicciones: ['L', 'L', 'L', 'E', 'L', 'L', 'L', 'L', 'L', 'E'] },
  { id: 38, nombre: 'Miguelito Arreola', predicciones: ['L', 'L', 'L', 'V', 'V', 'L', 'E', 'V', 'L', 'V'] },
  { id: 39, nombre: 'Az', predicciones: ['E', 'L', 'V', 'V', 'E', 'L', 'L', 'E', 'L', 'V'] },
  
];

const SimuladorResultados = () => {
  const [predicciones, setPredicciones] = useState(Array(partidos.length).fill(''));
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [usuariosConMasAciertos, setUsuariosConMasAciertos] = useState([]);
  const [maxAciertos, setMaxAciertos] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
  const [busqueda, setBusqueda] = useState('');
  const [sugerencias, setSugerencias] = useState([]);
  const usuariosPorPagina = 10;

  const calcularAciertos = (predicciones) => {
    return predicciones.reduce((aciertos, prediccion, index) => {
      return prediccion === resultadosReales[index] ? aciertos + 1 : aciertos;
    }, 0);
  };

  const encontrarUsuariosConMasAciertos = () => {
    const usuariosConMaxAciertosLocal = usuariosPredicciones.map(usuario => {
      const aciertos = calcularAciertos(usuario.predicciones);
      return { ...usuario, aciertos };
    });

    usuariosConMaxAciertosLocal.sort((a, b) => b.aciertos - a.aciertos);

    setUsuariosConMasAciertos(usuariosConMaxAciertosLocal);
    setMaxAciertos(usuariosConMaxAciertosLocal[0]?.aciertos || 0);
    setPaginaActual(1); 
  };

  const handleUsuarioChange = (e) => {
    const nombreUsuario = e.target.value;
    setBusqueda(nombreUsuario);

    if (nombreUsuario.trim() === '') {
      setSugerencias([]);
      setUsuarioSeleccionado(null);
      setPredicciones(Array(partidos.length).fill(''));
      return;
    }

    const coincidencias = usuariosPredicciones.filter(u =>
      u.nombre.toLowerCase().includes(nombreUsuario.toLowerCase())
    );

    setSugerencias(coincidencias);

    if (coincidencias.length === 1) {
      const usuario = coincidencias[0];
      setUsuarioSeleccionado(usuario);
      setPredicciones(usuario.predicciones);
    } else {
      setUsuarioSeleccionado(null);
      setPredicciones(Array(partidos.length).fill(''));
    }
  };

  const seleccionarSugerencia = (usuario) => {
    setBusqueda(usuario.nombre);
    setUsuarioSeleccionado(usuario);
    setPredicciones(usuario.predicciones);
    setSugerencias([]);
  };

  const handleLimpiar = () => {
    setPredicciones(Array(partidos.length).fill(''));
    setUsuarioSeleccionado(null);
    setUsuariosConMasAciertos([]);
    setMaxAciertos(0);
    setPaginaActual(1); 
    setBusqueda('');
    setSugerencias([]);
  };

  const usuariosPaginados = usuariosConMasAciertos.slice((paginaActual - 1) * usuariosPorPagina, paginaActual * usuariosPorPagina);
  const totalPaginas = Math.ceil(usuariosConMasAciertos.length / usuariosPorPagina);

  const cambiarPagina = (pagina) => {
    if (pagina >= 1 && pagina <= totalPaginas) {
      setPaginaActual(pagina);
    }
  };

  return (
    <div className="simulador-resultados">
      <h2>Semana #3 - Fecha FIFA 2024</h2>
      <div className="resultados">
        <input
          type="text"
          placeholder="Escribe tu nombre de usuario"
          value={busqueda}
          onChange={handleUsuarioChange}
          aria-label="Buscar usuario"
        />
        <button onClick={handleLimpiar} className="boton-limpiar" aria-label="Limpiar simulador">Limpiar</button>


        {sugerencias.length > 0 && (
          <ul className="sugerencias">
            {sugerencias.map(usuario => (
              <li key={usuario.id} onClick={() => seleccionarSugerencia(usuario)}>
                {usuario.nombre}
              </li>
            ))}
          </ul>
        )}

        {usuarioSeleccionado && (
          <div className="aciertos">
            <p>{usuarioSeleccionado.nombre} Tuviste {calcularAciertos(usuarioSeleccionado.predicciones)} aciertos.</p>
          </div>
        )}

        <PrediccionesUsuario 
          partidos={partidos} 
          resultadosReales={resultadosReales} 
          predicciones={usuarioSeleccionado ? usuarioSeleccionado.predicciones : predicciones} 
          setPredicciones={setPredicciones} 
        />

        <button onClick={encontrarUsuariosConMasAciertos} className="boton-simular" aria-label="Mostrar usuarios con más aciertos">Mostrar Usuarios</button>

        <div className="coincidencias">
          {usuariosConMasAciertos.length > 0 && (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Aciertos</th>
                  </tr>
                </thead>
                <tbody>
                  {usuariosPaginados.map(usuario => (
                    <tr key={usuario.id} className={usuario.aciertos === maxAciertos ? 'highlight' : ''}>
                      <td>{usuario.nombre}</td>
                      <td className={usuario.aciertos === maxAciertos ? 'highlight' : ''}>{usuario.aciertos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="paginacion">
                <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>Anterior</button>
                <span>Página {paginaActual} de {totalPaginas}</span>
                <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas}>Siguiente</button>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default SimuladorResultados;