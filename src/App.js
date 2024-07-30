import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Components/Pages/Login';
import CadastroUsuario from './Components/Pages/CadastroUsuario';
import EditarPerfil from './Components/Pages/EditarPerfil';
import Home from './Components/Pages/Home';
import Perfil from './Components/Pages/Perfil';
import Comunidades from './Components/Pages/Comunidades'

export default function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        </div>
    );
}