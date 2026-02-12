import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./../App";
import Fundamentos from "./../Modulos/Fundamentos/Fundamentos";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Fundamentos /> },
      { path: "/fundamentos", element: <Fundamentos /> },
    ],
  },
]);
