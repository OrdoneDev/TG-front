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
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/entrar' element={<Login/>} />
                    <Route path='/registrar' element={<CadastroUsuario/>} />
                    <Route path='/editarPerfil' element={<EditarPerfil/>} />
                    <Route path='/perfil' element={<Perfil/>} />
                    <Route path='/comunidades' element={<Comunidades/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}