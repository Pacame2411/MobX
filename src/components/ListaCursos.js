// src/components/ListaCursos.js
import React from 'react';
import { connect } from 'react-redux';

const ListaCursos = ({ cursos }) => {
  return (
    <div>
      <h2>Cursos Disponibles</h2>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id}>
            <h3>{curso.nombre}</h3>
            <p>{curso.descripcion}</p>
            <p>Duración: {curso.duracion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cursos: state.cursos
});

export default connect(mapStateToProps)(ListaCursos);
