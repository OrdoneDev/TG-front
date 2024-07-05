import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import Feed from './Feed';
import Navigation from './Navigation';
import InputPublicacao from './InputPublicacao';
import CadastroUsuario from './CadastroUsuario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        {/*<InputPublicacao />
        <div>
            <Feed />
            <Feed />
            <Feed />
            <div className="mb-12">
                <Feed />
            </div>
        </div>
        <Navigation />*/}
        <Login />
    </div>
);
