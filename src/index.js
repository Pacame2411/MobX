import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store'; // Asegúrate de que la ruta sea correcta

const container = document.getElementById('root');
const root = createRoot(container); // Crear la raíz con la nueva API de React 18

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
