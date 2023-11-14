import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import theme from './theme';
import './theme/index.css';
import './theme/custom.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import TheGarageApp from './TheGarageApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <TheGarageApp />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
