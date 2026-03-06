import PageMainTitle from "../../components/shared/PageMainTitle";
import PageMainContent from "../../components/shared/PageMainContent";
import Exercicio from "../../components/shared/Exercicio";

const CustomHooks = () => {
  return (
    <>
      <PageMainTitle title="MÓDULO 5: Custom Hooks" />

      <PageMainContent>
        <Exercicio
          titulo="Exercício 5.1: useToggle"
          chamada="Custom hook para toggle booleano."
          requisitos={["Retorna [value, toggle]", "toggle inverte valor"]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.2: useCounter"
          chamada="Hook para contador com increment, decrement, reset."
          requisitos={[
            "Retorna {count, increment, decrement, reset}",
            "Valor inicial como parâmetro",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.3: useLocalStorage"
          chamada="Hook que sincroniza state com localStorage."
          requisitos={[
            "Lê ao montar",
            "Salva ao mudar",
            "Retorna [value, setValue]",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.3: useLocalStorage"
          chamada="Hook que sincroniza state com localStorage."
          requisitos={[
            "Lê ao montar",
            "Salva ao mudar",
            "Retorna [value, setValue]",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.4: useFetch"
          chamada="Hook para buscar dados de API."
          requisitos={[
            "Retorna {data, loading, error}",
            "useEffect para fetch",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.5: useDebounce"
          chamada="Hook que debounce um valor."
          requisitos={[
            "Delay configurável",
            "Retorna valor debounced",
            "setTimeout cleanup",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.6: useWindowSize"
          chamada="Hook que retorna width e height da janela."
          requisitos={["Listener resize", "Cleanup", "Retorna {width, height}"]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.7: useOnClickOutside"
          chamada="Hook que detecta click fora de elemento."
          requisitos={[
            "useRef",
            "mousedown listener",
            "Callback quando clica fora",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.8: useKeyPress"
          chamada="Hook que detecta quando tecla específica é pressionada."
          requisitos={[
            "Parâmetro: targetKey",
            "Retorna boolean",
            "Listener com cleanup",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.9: useInterval"
          chamada="Hook para setInterval declarativo."
          requisitos={[
            "Callback e delay",
            "Auto cleanup",
            "Pode pausar com null",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.10: usePrevious"
          chamada="Hook que retorna valor anterior de um state."
          requisitos={["useRef", "useEffect", "Retorna valor anterior"]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.11: useOnlineStatus"
          chamada="Hook que retorna se está online."
          requisitos={["navigator.onLine", "Listeners", "Retorna boolean"]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.12: useHover"
          chamada="Hook que detecta hover em elemento."
          requisitos={[
            "useRef",
            "mouseenter/mouseleave",
            "Retorna [ref, isHovered]",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.13: useArray"
          chamada="Hook com helpers para manipular array."
          requisitos={[
            "push, filter, update, remove, clear",
            "Retorna {array, ...methods}",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.14: useForm"
          chamada="Hook para gerenciar formulários."
          requisitos={[
            "values, errors, handleChange, handleSubmit",
            "Validação básica",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.14: useForm"
          chamada="Hook para gerenciar formulários."
          requisitos={[
            "values, errors, handleChange, handleSubmit",
            "Validação básica",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.15: useAsync"
          chamada="Hook genérico para operações assíncronas."
          requisitos={["execute, data, loading, error", "Reusável"]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.16: useClipboard"
          chamada="Hook para copiar texto para clipboard."
          requisitos={[
            "copy function",
            "isCopied state",
            "navigator.clipboard",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.17: useMediaQuery"
          chamada="Hook para media queries."
          requisitos={[
            "Parâmetro: query string",
            "matchMedia",
            "Retorna matches",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.18: useGeolocation"
          chamada="Hook que retorna localização do usuário."
          requisitos={["loading, error, coords", "Permissão", "Watch position"]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.19: useDarkMode"
          chamada="Hook completo para dark mode."
          requisitos={[
            "localStorage",
            "Classe no body",
            "toggle, enable, disable",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 5.20: useApi"
          chamada="Hook completo para requisições API com retry."
          requisitos={[
            "get, post, put, delete",
            "loading, error",
            "retry logic",
          ]}
        ></Exercicio>
      </PageMainContent>
    </>
  );
};

export default CustomHooks;
