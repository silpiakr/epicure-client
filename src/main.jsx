import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './router/router.jsx';
import AuthProvider from './context/AuthContext/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './Theme/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
      <AuthProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </AuthProvider>
      </ThemeProvider>
  </StrictMode>,
)
