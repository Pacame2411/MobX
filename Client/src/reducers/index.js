const initialState = {
    cursos: [
      { id: 1, nombre: 'Curso de React', descripcion: 'Aprende React desde cero', duracion: '30 horas' },
      { id: 2, nombre: 'Curso de Redux', descripcion: 'Gestión de estado con Redux', duracion: '20 horas' },
      { id: 3, nombre: 'Curso de JavaScript', descripcion: 'Entiende JavaScript profundamente', duracion: '40 horas' }
    ]
  };
  
  // src/actions/index.js
export function cargarCursos(cursos) {
    return { type: 'CARGAR_CURSOS', cursos };
  }
  
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      // Agrega casos según las acciones
      default:
        return state;
    } 
  }
  export default rootReducer;
  