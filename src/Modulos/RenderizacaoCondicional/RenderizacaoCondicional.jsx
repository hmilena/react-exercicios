import Exercicio from "../../components/shared/Exercicio";

const RenderizacaoCondicional = () => {
    return (
        <div className="flex flex-col gap-4 bg-white">
            <div className="ex-title py-4 px-5 sticky top-0 bg-cyan-100 shadow-2xs z-10">
                <h1 className="text-2xl font-bold">MÓDULO 3: Renderização Condicional e Listas</h1>
            </div>

            <div className="ex-content flex flex-col gap-4 px-5 pb-5">

                <Exercicio
                    titulo="Exercício 3.1: Simple List"
                    chamada="Renderize um array de nomes em uma lista <ul>."
                    requisitos={[
                        "Array com 5 nomes",
                        "Use .map()",
                        "Cada nome em <li> com key"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.2: Product List"
                    chamada="Array de produtos (nome, preço) renderizado em cards."
                    requisitos={[
                        "Array de objetos",
                        "Card para cada produto",
                        "key usando id"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.3: Conditional Badge"
                    chamada="Exiba badge 'Novo' apenas se produto foi adicionado nos últimos 7 dias."
                    requisitos={[
                        "Prop: dataAdicao (Date)",
                        "Compare com data atual",
                        "Renderize badge condicionalmente"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.4: Empty State"
                    chamada="Lista que mostra 'Nenhum item' quando array vazio."
                    requisitos={[
                        "Verifique array.length === 0",
                        "Mensagem customizada",
                        "Ícone ou imagem"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.5: Odd/Even Styling"
                    chamada="Lista onde items ímpares e pares têm cores diferentes."
                    requisitos={[
                        "Use index no .map()",
                        "className dinâmico",
                        "Alterne cores",
                        "Dica: className={index % 2 === 0 ? 'par' : 'impar'}"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.6: Filtered List"
                    chamada="Lista de usuários filtrada por status (active/inactive)."
                    requisitos={[
                        "Botões: Todos, Ativos, Inativos",
                        "Filter array baseado na seleção",
                        "Exiba count"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.7: Student Grades"
                    chamada="Lista de alunos com notas. Destaque aprovados (>=7) em verde."
                    requisitos={[
                        "Array: {nome, nota}",
                        "Cor verde se nota >= 7",
                        "Vermelha se < 7"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.8: Task List with Status"
                    chamada="Tarefas com checkbox que alterna estado (completa/incompleta)."
                    requisitos={[
                        "Array de objetos {id, texto, completa}",
                        "Checkbox controlado",
                        "Texto riscado se completa"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.9: Search Results"
                    chamada="Input de busca filtra lista de items em tempo real."
                    requisitos={[
                        "Input controlado",
                        "Filter array por texto",
                        "Case insensitive"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.10: Pagination"
                    chamada="Lista com paginação (10 items por página)."
                    requisitos={[
                        "Botões Anterior/Próximo",
                        "Exiba apenas items da página atual",
                        "Desabilite botões nos extremos"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.11: Sort List"
                    chamada="Lista que pode ser ordenada (A-Z, Z-A, menor preço, maior preço)."
                    requisitos={[
                        "Botões de ordenação",
                        "Use.sort()",
                        "Exiba lista ordenada"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.12: Multi-select List"
                    chamada="Lista onde você pode selecionar múltiplos items com checkbox."
                    requisitos={[
                        "Checkbox em cada item",
                        "Array de selecionados",
                        "Botão 'Selecionar Todos'"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.13: Accordion List"
                    chamada="Lista onde clicar expande/colapsa detalhes do item."
                    requisitos={[
                        "Click alterna expansão",
                        "Só um item expandido por vez",
                        "Ícone de seta"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.14: Grid vs List View"
                    chamada="Botões para alternar entre visualização grid e lista."
                    requisitos={[
                        "Toggle view mode",
                        "Diferentes classes CSS",
                        "Mesmo componente, layout diferente"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.15: Grouped List"
                    chamada="Items agrupados por categoria (ex: frutas, vegetais, grãos)."
                    requisitos={[
                        "Agrupe por categoria",
                        "Título para cada grupo",
                        "Nested map()"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.16: Lazy Load List"
                    chamada="Carregue 20 items, botão 'Carregar Mais' adiciona +20."
                    requisitos={[
                        "Slice array",
                        "Botão incrementa quantidade visível",
                        "Desapareça quando todos carregados"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.17: Drag and Drop List"
                    chamada="Lista onde pode arrastar para reordenar (conceito apenas, sem biblioteca)."
                    requisitos={[
                        "Botões ↑ ↓ para mover",
                        "Atualize ordem no array",
                        "Visualize nova ordem"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.18: Conditional Rendering Complex"
                    chamada="Exiba diferentes componentes baseado em role do usuário (admin/user/guest)."
                    requisitos={[
                        "3 componentes diferentes",
                        "Switch baseado em role",
                        "Props passadas corretamente"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.19: Table with Actions"
                    chamada="Tabela de dados com botões Edit e Delete em cada linha."
                    requisitos={[
                        "Renderize como <table>",
                        "Botões funcionais",
                        "Simule ações(console.log)"
                    ]}
                ></Exercicio>

                <Exercicio
                    titulo="Exercício 3.20: Master-Detail View"
                    chamada="Lista de items à esquerda, clique mostra detalhes à direita."
                    requisitos={[
                        "Split screen",
                        "Click atualiza item selecionado",
                        "Destaque item ativo"
                    ]}
                ></Exercicio>

            </div>

        </div >
    )
}

export default RenderizacaoCondicional;