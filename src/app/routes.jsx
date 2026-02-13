import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./../App";
import Fundamentos from "./../Modulos/Fundamentos/Fundamentos";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Fundamentos /> },
        { path: "fundamentos", element: <Fundamentos /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
