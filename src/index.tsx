import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

import AuthProvider from 'context/auth';
import DiscardModalProvider from 'context/discard-modal';
import SuccessModalProvider from 'context/success-modal';

import theme from 'app/theme';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <AuthProvider>
      <SuccessModalProvider>
        <DiscardModalProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
            <Toaster />
          </ThemeProvider>
        </DiscardModalProvider>
      </SuccessModalProvider>
    </AuthProvider>
  </BrowserRouter>
);
