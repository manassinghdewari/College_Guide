import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { StyledEngineProvider } from '@mui/material';
import { BrowserRouter, useLocation } from 'react-router-dom';
// import axios from 'axios'
const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return children || null;
  };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StyledEngineProvider injectFirst>
        <BrowserRouter >
        <ScrollToTop >
            <App />
        </ScrollToTop>
        </BrowserRouter>
    </StyledEngineProvider>
    
);
