// src/stores/CoursesStore.js
import { makeAutoObservable } from 'mobx';

class CoursesStore {
  cursos = [
    { id: 1, nombre: 'Curso de React', descripcion: 'Aprende React desde cero', duracion: '30 horas' },
    { id: 2, nombre: 'Curso de Redux', descripcion: 'Gestión de estado con Redux', duracion: '20 horas' },
    { id: 3, nombre: 'Curso de JavaScript', descripcion: 'Entiende JavaScript profundamente', duracion: '40 horas' }
  ];

  constructor() {
    makeAutoObservable(this);
  }

  // Método para añadir cursos
  añadirCurso(curso) {
    this.cursos.push({ ...curso, id: Date.now() }); // Usamos Date.now() para un ID simple
  }

  // Método para eliminar cursos por ID
  eliminarCurso(cursoId) {
    this.cursos = this.cursos.filter(curso => curso.id !== cursoId);
  }
}

export default new CoursesStore();
