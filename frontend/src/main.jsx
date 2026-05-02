import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './routes';
import { RouterProvider } from 'react-router-dom';
import GlobalState from './context/GlobalState';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalState>
            <RouterProvider router={Router} />
        </GlobalState>
    </StrictMode>
);
