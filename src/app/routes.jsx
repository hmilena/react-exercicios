import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./../App";
import Home from "./../Pages/Home";
import Fundamentos from "./../Modulos/1-Fundamentos/Respostas";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/fundamentos", element: <Fundamentos /> },
    ],
  },
]);
