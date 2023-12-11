import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import routes from './Routers.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={routes}/>
    </React.StrictMode>

)

