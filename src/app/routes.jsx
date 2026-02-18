import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./../App";
import Fundamentos from "./../Modulos/Fundamentos/Fundamentos";
import State from "./../Modulos/State/State-e-Interatividade";
import RenderizacaoCondicional from "./../Modulos/RenderizacaoCondicional/RenderizacaoCondicional";
import UseEffectSideEffect from "./../Modulos/UseEffect-e-SideEffect/UseEffectSideEffect";
import CustomHooks from "./../Modulos/CustomHooks/CustomHooks";
import ContextAPI from "./../Modulos/ContextAPI/ContextAPI";
import PerformanceOtimizacao from "./../Modulos/Performance-e-Otimizacao/Performance-e-Otimizacao";
import FormulariosAvancados from "./../Modulos/FormulariosAvancados/FormulariosAvancados";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Fundamentos /> },
        { path: "fundamentos", element: <Fundamentos /> },
        { path: "state-interatividade", element: <State /> },
        { path: "renderizacao-condicional", element: <RenderizacaoCondicional /> },
        { path: "use-effect-side-effects", element: <UseEffectSideEffect /> },
        { path: "custom-hooks", element: <CustomHooks /> },
        { path: "context-api", element: <ContextAPI /> },
        { path: "performance-otimizacao", element: <PerformanceOtimizacao /> },
        { path: "formularios-avancados", element: <FormulariosAvancados /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
