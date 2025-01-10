// filepath: /c:/Users/danilo.silva/Documents/GitHub/formlidere/minha-aplicacao/src/index.js
import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { setup } from 'twind';
import config from './twind.config';


// Configura o Twind
setup(config);

// Cria a root para o React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
