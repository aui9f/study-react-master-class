import React from 'react';
import ReactDOM from 'react-dom';

import { RouterProvider } from 'react-router-dom';
import Router from './Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';


const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      
      <RouterProvider router={Router}/>
      
    </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>, 
  document.getElementById('root')
);
