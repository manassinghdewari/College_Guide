import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { StyledEngineProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StyledEngineProvider injectFirst>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </StyledEngineProvider>
    
);
