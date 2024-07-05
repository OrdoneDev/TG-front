import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import Feed from './Feed';
import Navigation from './Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
            <div>
            <Feed />
            <Feed />
            <Feed />
            <div className="mb-16">
                <Feed />
            </div>
        </div>
        <Navigation />
    </div>
);
