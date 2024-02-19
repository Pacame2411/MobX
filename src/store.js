import { createStore } from 'redux';
import rootReducer from './reducers'; // Asegúrate de que la ruta sea correcta

const store = createStore(
  rootReducer,
  // Aplica middleware o habilita las Redux DevTools aquí si es necesario
);

export default store;
