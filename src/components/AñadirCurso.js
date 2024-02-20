// src/components/AñadirCurso.js
import React, { useState } from 'react';
import coursesStore from '../stores/CoursesStore';

const AñadirCurso = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [duracion, setDuracion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    coursesStore.añadirCurso({ nombre, descripcion, duracion });
    setNombre('');
    setDescripcion('');
    setDuracion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del curso"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duración"
        value={duracion}
        onChange={(e) => setDuracion(e.target.value)}
      />
      <button type="submit">Añadir Curso</button>
    </form>
  );
};

export default AñadirCurso;
