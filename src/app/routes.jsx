import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./../App";
import Fundamentos from "./../Modulos/Fundamentos/Fundamentos";
import State from "./../Modulos/State/State-e-Interatividade";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Fundamentos /> },
        { path: "fundamentos", element: <Fundamentos /> },
        { path: "state-interatividade", element: <State /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
