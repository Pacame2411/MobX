// src/App.js
import React from 'react';
import ListaCursos from './components/ListaCursos';
import AñadirCurso from './components/AñadirCurso';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Cursos de Formación</h1>
      </header>
      <main>
        <ListaCursos /> {/* Muestra la lista de cursos existentes */}
        <AñadirCurso /> {/* Añade nuevos cursos al final */}
      </main>
      <footer>
        <p>© 2024 Cursos Online</p>
      </footer>
    </div>
  );
}

export default App;
