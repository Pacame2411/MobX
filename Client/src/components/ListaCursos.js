// src/components/ListaCursos.js
import React from 'react';
import { observer } from 'mobx-react';
import coursesStore from '../stores/CoursesStore';

const ListaCursos = observer(() => {
  // Asegúrate de que realmente estás accediendo al estado actualizado de cursos
  const { cursos } = coursesStore;

  // Verifica que cursos contenga los datos esperados con un console.log
  console.log(cursos);

  return (
    <ul>
      {cursos.map(curso => (
        <li key={curso.id}>
          <h3>{curso.nombre}</h3>
          <p>{curso.descripcion}</p>
          <p>Duración: {curso.duracion}</p>
          <button onClick={() => coursesStore.eliminarCurso(curso.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
});

export default ListaCursos;
