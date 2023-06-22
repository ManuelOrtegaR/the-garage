import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import TheGarageApp from './TheGarageApp.jsx';
import './theme/index.css';
import './theme/custom.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <TheGarageApp />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
