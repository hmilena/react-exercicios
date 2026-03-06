import PageMainTitle from "../../components/shared/PageMainTitle";
import PageMainContent from "../../components/shared/PageMainContent";
import Exercicio from "../../components/shared/Exercicio";

const UseEffectSideEffect = () => {
  return (
    <>
      <PageMainTitle title="MÓDULO 4: useEffect e side effects" />

      <PageMainContent>
        <Exercicio
          titulo="Exercício 4.1: Component Mount"
          chamada="useEffect que executa console.log quando componente monta."
          requisitos={["useEffect com []", "Log: 'Componente montou'"]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.2: Document Title"
          chamada="Mude document.title quando componente monta."
          requisitos={["useEffect para atualizar title", "Título customizado"]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.3: Fetch Users"
          chamada="Busque lista de usuários da API ao montar."
          requisitos={[
            "JSONPlaceholder API",
            "Loading state",
            "Exiba usuários",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.4: Dependency Array"
          chamada="useEffect que executa quando prop 'userId' muda."
          requisitos={[
            "Dependência [userId]",
            "Busque dados do user",
            "Log quando userId muda",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.5: Cleanup Timer"
          chamada="Relógio que atualiza a cada segundo com cleanup."
          requisitos={[
            "setInterval no useEffect",
            "return cleanup clearInterval",
            "Exiba hora atual",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.6: Window Resize"
          chamada="Detecte mudança de tamanho da janela."
          requisitos={[
            "addEventListener('resize')",
            "useState para width",
            "Cleanup removeEventListener",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.7: Scroll Position"
          chamada="Mostre posição do scroll da página."
          requisitos={[
            "window.scrollY",
            "addEventListener('scroll')",
            "Cleanup",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.8: Auto-save"
          chamada="Input que salva no localStorage a cada 2 segundos."
          requisitos={[
            "setTimeout no useEffect",
            "Dependência [text]",
            "Salve no localStorage",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.9: Fetch on Search"
          chamada="Busque resultados quando usuário para de digitar (debounce)."
          requisitos={[
            "setTimeout para delay",
            "Cleanup clearTimeout",
            "Busque API após 500ms",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.10: Multiple Effects"
          chamada="Componente com 3 useEffects diferentes."
          requisitos={[
            "1 para title",
            "1 para fetch",
            "1 para listener",
            "Todos com cleanup apropriado",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.11: Conditional Effect"
          chamada="useEffect que só executa se condição for true."
          requisitos={["if dentro do useEffect", "Dependência adequada"]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.12: API Polling"
          chamada="Busque dados da API a cada 5 segundos."
          requisitos={[
            "setInterval para polling",
            "Cleanup",
            "Botão para pausar polling",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.13: Focus Management"
          chamada="Auto-focus em input quando componente monta."
          requisitos={["useRef", "useEffect", "inputRef.current.focus()"]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.14: Animation on Mount"
          chamada="Fade in animation quando componente monta."
          requisitos={[
            "useState para opacity",
            "useEffect altera opacity",
            "Transição CSS",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.15: Keyboard Listener"
          chamada="Detecte quando usuário pressiona teclas específicas."
          requisitos={[
            "addEventListener('keydown')",
            "Detecte teclas (Esc, Enter)",
            "Cleanup",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.16: Online/Offline Detector"
          chamada="Mostre se usuário está online ou offline."
          requisitos={[
            "navigator.onLine",
            "Listeners online/offline",
            "Exiba status",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.17: Geolocation"
          chamada="Busque localização do usuário ao montar."
          requisitos={[
            "navigator.geolocation",
            "useState para coords",
            "Exiba latitude/longitude",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.18: Dark Mode Persistence"
          chamada="Carregue tema do localStorage ao montar."
          requisitos={[
            "useEffect lê localStorage",
            "Aplica tema",
            "Salve mudanças",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.19: Fetch with Abort"
          chamada="Busque dados com AbortController para cancelar."
          requisitos={[
            "AbortController",
            "Cleanup abort()",
            "Evite memory leak",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 4.20: Complex Lifecycle"
          chamada="Componente com mount, update e unmount logs."
          requisitos={[
            "Log ao montar",
            "Log quando prop muda",
            "Log ao desmontar",
            "Cleanup adequado",
          ]}
        ></Exercicio>
      </PageMainContent>
    </>
  );
};

export default UseEffectSideEffect;
