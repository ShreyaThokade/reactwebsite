import React from 'react';

import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact'
import Services from './pages/Services';
import Login from './pages/Login';
import We from './pages/We';


import {
  CreateBrowserRouter,
  RouterProvider,
  route,
} from "react-router-dom";

const router = createBrowserRouter([{
    path:"/",
    element:<App />,

},

{
  path:"About",
  element:<About />,

},



{
  path:"Contact",
  element:< Contact/>,

},
{
  path:"Services",
  element:< Services/>,

},
{
  path:"Login",
  element:< Login/>,

},
{
  path:"We",
  element:< We/>,

},

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


ReactDOM.createRoot(document.getElementById('rout')).render(
  <RouterProvider router={router} />
);


