import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import hi from './components/hi.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "hi",
    element: <hi/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
