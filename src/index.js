import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Components/Pages/Login';
import CadastroUsuario from './Components/Pages/CadastroUsuario';
import EditarPerfil from './Components/Pages/EditarPerfil';
import Home from './Components/Pages/Home';
import Perfil from './Components/Pages/Perfil';
import Comunidade from './Components/Pages/Comunidade'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Perfil/>
    </div>
);
