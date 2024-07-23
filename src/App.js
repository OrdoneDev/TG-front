import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Components/Pages/Login';
import CadastroUsuario from './Components/Pages/CadastroUsuario';
import EditarPerfil from './Components/Pages/EditarPerfil';
import Home from './Components/Pages/Home';
import Perfil from './Components/Pages/Perfil';
import Comunidade from './Components/Pages/Comunidade'

export default function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Login/>
            </BrowserRouter>
        </div>
    );
}