import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, theme } from './theme';
import { RouterProvider } from 'react-router-dom';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <RouterProvider router={Router}/>
    </ThemeProvider>
    
  </React.StrictMode>, 
  document.getElementById('root')
);
