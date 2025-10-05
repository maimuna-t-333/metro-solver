import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home.jsx';
import MainLayout from './MainLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index:true,
        Component:MainLayout
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

