import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Tesla from './page/Tesla';   // Import Tesla component
import Business from './page/Business'; // Placeholder
import TechCrunch from './page/TechCrunch'; // Placeholder
import Home from './page/Home';
// Define the router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,

      },
      {
        path: "tesla",
        element: <Tesla />,
      },
      {
        path: "business",
        element: <Business />,
      },
      {
        path: "techcrunch",
        element: <TechCrunch />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
