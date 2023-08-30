import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, theme } from './theme';
import { RouterProvider } from 'react-router-dom';
import Router from './Router';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
      <RouterProvider router={Router}/>
    </ThemeProvider>    
    </QueryClientProvider>
  </React.StrictMode>, 
  document.getElementById('root')
);
