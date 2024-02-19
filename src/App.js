import React from 'react';
import ListaCursos from './components/ListaCursos';
import './App.css'; // Importa los estilos aquí


function App() {
  return (
    <div>
      <header>
        {/* Aquí podría ir tu menú y otros elementos del header */}
        <h1>Cursos de Formación</h1>
      </header>
      <main>
        <ListaCursos />
      </main>
      <footer>
        {/* Información del footer */}
        <p>© 2024 Cursos Online</p>
      </footer>
    </div>
  );
}

export default App;
