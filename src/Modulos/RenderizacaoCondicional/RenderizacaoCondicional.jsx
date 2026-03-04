import PageMainTitle from "../../components/shared/PageMainTitle";
import PageMainContent from "../../components/shared/PageMainContent";
import Exercicio from "../../components/shared/Exercicio";

import SimpleList from "./Respostas/SimpleList";
import simpleListCode from "./Respostas/SimpleList?raw";

import ProductList from "./Respostas/ProductList";
import productListCode from "./Respostas/ProductList?raw";

import ConditionalBadge from "./Respostas/ConditionalBadge";
import conditionalBadgeCode from "./Respostas/ConditionalBadge?raw";

import EmptyState from "./Respostas/EmptyState";
import emptyStateCode from "./Respostas/EmptyState?raw";

import OddEven from "./Respostas/OddEven";
import oddEvenCode from "./Respostas/OddEven?raw";

import FilteredList from "./Respostas/FilteredList";
import filteredListCode from "./Respostas/FilteredList?raw";

import StudentGrade from "./Respostas/StudentGrade";
import studentGradeCode from "./Respostas/StudentGrade?raw";

const RenderizacaoCondicional = () => {
  const users = [
    {
      id: 1,
      name: "Mia",
      status: "active",
    },
    {
      id: 2,
      name: "Lane",
      status: "inactive",
    },
    {
      id: 3,
      name: "Carlos",
      status: "active",
    },
    {
      id: 4,
      name: "Lisa",
      status: "inactive",
    },
    {
      id: 5,
      name: "Gabriel",
      status: "inactive",
    },
  ];

  const students = [
    {
      id: 101,
      name: "José da Silva",
      active: true,
      grades: [
        {
          subject: "português",
          grade: 55,
        },
        {
          subject: "matemática",
          grade: 90,
        },
        { subject: "história", grade: 78 },
      ],
    },
    {
      id: 202,
      name: "Maria Oliveira",
      active: true,
      grades: [
        { subject: "português", grade: 92 },
        { subject: "matemática", grade: 88 },
        { subject: "história", grade: 95 },
      ],
    },
    {
      id: 303,
      name: "Pedro Santos",
      active: true,
      grades: [
        { subject: "português", grade: 70 },
        { subject: "matemática", grade: 43 },
        { subject: "história", grade: 80 },
      ],
    },
    {
      id: 404,
      name: "Ana Maria",
      active: true,
      grades: [
        { subject: "português", grade: 95 },
        { subject: "matemática", grade: 98 },
        { subject: "história", grade: 100 },
      ],
    },
    {
      id: 505,
      name: "Vanderson Silva",
      active: false,
      grades: [
        { subject: "português", grade: 60 },
        { subject: "matemática", grade: 55 },
        { subject: "história", grade: 70 },
      ],
    },
  ];

  return (
    <>
      <PageMainTitle title="MÓDULO 3: Renderização Condicional e Listas" />

      <PageMainContent>
        <Exercicio
          titulo="Exercício 3.1: Simple List"
          chamada="Renderize um array de nomes em uma lista <ul>."
          requisitos={[
            "Array com 5 nomes",
            "Use .map()",
            "Cada nome em <li> com key",
          ]}
          codigo={simpleListCode}
        >
          <SimpleList />
        </Exercicio>

        <Exercicio
          titulo="Exercício 3.2: Product List"
          chamada="Array de produtos (nome, preço) renderizado em cards."
          requisitos={[
            "Array de objetos",
            "Card para cada produto",
            "key usando id",
          ]}
          codigo={productListCode}
        >
          <ProductList />
        </Exercicio>

        <Exercicio
          titulo="Exercício 3.3: Conditional Badge"
          chamada="Exiba badge 'Novo' apenas se produto foi adicionado nos últimos 7 dias."
          requisitos={[
            "Prop: dataAdicao (Date)",
            "Compare com data atual",
            "Renderize badge condicionalmente",
            "1 segundo tem 1000 milissegundos. 1 minuto tem 60 segundos. 1 hora tem 60 minutos. 1 dia tem 24 horas.",
          ]}
          codigo={conditionalBadgeCode}
        >
          <div className="inline-flex flex-col gap-3">
            <ConditionalBadge dateItWasAdded={new Date()} />
            <ConditionalBadge dateItWasAdded={new Date("2026-03-03")} />
            <ConditionalBadge dateItWasAdded={new Date("2022-03-03")} />
          </div>
        </Exercicio>

        <Exercicio
          titulo="Exercício 3.4: Empty State"
          chamada="Lista que mostra 'Nenhum item' quando array vazio."
          requisitos={[
            "Verifique array.length === 0",
            "Mensagem customizada",
            "Ícone ou imagem",
          ]}
          codigo={emptyStateCode}
        >
          <div className="inline-flex- flex-col">
            <EmptyState items={[]} />
            <EmptyState items={["item 1", "item 2"]} />
          </div>
        </Exercicio>

        <Exercicio
          titulo="Exercício 3.5: Odd/Even Styling"
          chamada="Lista onde items ímpares e pares têm cores diferentes."
          requisitos={[
            "Use index no .map()",
            "className dinâmico",
            "Alterne cores",
            "Dica: className={index % 2 === 0 ? 'par' : 'impar'}",
          ]}
          codigo={oddEvenCode}
        >
          <OddEven
            items={[
              {
                id: 1,
                title: "Item 1",
              },
              {
                id: 2,
                title: "Item 2",
              },
              {
                id: 3,
                title: "Item 3",
              },
              {
                id: 4,
                title: "Item 4",
              },
              {
                id: 5,
                title: "Item 5",
              },
              {
                id: 6,
                title: "Item 6",
              },
              {
                id: 7,
                title: "Item 7",
              },
              {
                id: 8,
                title: "Item 8",
              },
              {
                id: 9,
                title: "Item 9",
              },
              {
                id: 10,
                title: "Item 10",
              },
            ]}
          />
        </Exercicio>

        <Exercicio
          titulo="Exercício 3.6: Filtered List"
          chamada="Lista de usuários filtrada por status (active/inactive)."
          requisitos={[
            "Botões: Todos, Ativos, Inativos",
            "Filter array baseado na seleção",
            "Exiba count",
          ]}
          codigo={filteredListCode}
        >
          <FilteredList users={users} />
        </Exercicio>

        <Exercicio
          titulo="Exercício 3.7: Student Grades"
          chamada="Lista de alunos com notas. Destaque aprovados (>=7) em verde."
          requisitos={[
            "Array: {nome, nota}",
            "Cor verde se nota >= 7",
            "Vermelha se < 7",
          ]}
          codigo={studentGradeCode}
        >
          <StudentGrade students={students} />
        </Exercicio>

        <Exercicio
          titulo="Exercício 3.8: Task List with Status"
          chamada="Tarefas com checkbox que alterna estado (completa/incompleta)."
          requisitos={[
            "Array de objetos {id, texto, completa}",
            "Checkbox controlado",
            "Texto riscado se completa",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 3.9: Search Results"
          chamada="Input de busca filtra lista de items em tempo real."
          requisitos={[
            "Input controlado",
            "Filter array por texto",
            "Case insensitive",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 3.10: Pagination"
          chamada="Lista com paginação (10 items por página)."
          requisitos={[
            "Botões Anterior/Próximo",
            "Exiba apenas items da página atual",
            "Desabilite botões nos extremos",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 3.11: Sort List"
          chamada="Lista que pode ser ordenada (A-Z, Z-A, menor preço, maior preço)."
          requisitos={[
            "Botões de ordenação",
            "Use.sort()",
            "Exiba lista ordenada",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 3.12: Multi-select List"
          chamada="Lista onde você pode selecionar múltiplos items com checkbox."
          requisitos={[
            "Checkbox em cada item",
            "Array de selecionados",
            "Botão 'Selecionar Todos'",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 3.13: Accordion List"
          chamada="Lista onde clicar expande/colapsa detalhes do item."
          requisitos={[
            "Click alterna expansão",
            "Só um item expandido por vez",
            "Ícone de seta",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 3.14: Grid vs List View"
          chamada="Botões para alternar entre visualização grid e lista."
          requisitos={[
            "Toggle view mode",
            "Diferentes classes CSS",
            "Mesmo componente, layout diferente",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 3.15: Grouped List"
          chamada="Items agrupados por categoria (ex: frutas, vegetais, grãos)."
          requisitos={[
            "Agrupe por categoria",
            "Título para cada grupo",
            "Nested map()",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 3.16: Lazy Load List"
          chamada="Carregue 20 items, botão 'Carregar Mais' adiciona +20."
          requisitos={[
            "Slice array",
            "Botão incrementa quantidade visível",
            "Desapareça quando todos carregados",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 3.17: Drag and Drop List"
          chamada="Lista onde pode arrastar para reordenar (conceito apenas, sem biblioteca)."
          requisitos={[
            "Botões ↑ ↓ para mover",
            "Atualize ordem no array",
            "Visualize nova ordem",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 3.18: Conditional Rendering Complex"
          chamada="Exiba diferentes componentes baseado em role do usuário (admin/user/guest)."
          requisitos={[
            "3 componentes diferentes",
            "Switch baseado em role",
            "Props passadas corretamente",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 3.19: Table with Actions"
          chamada="Tabela de dados com botões Edit e Delete em cada linha."
          requisitos={[
            "Renderize como <table>",
            "Botões funcionais",
            "Simule ações(console.log)",
          ]}
        ></Exercicio>

        <Exercicio
          titulo="Exercício 3.20: Master-Detail View"
          chamada="Lista de items à esquerda, clique mostra detalhes à direita."
          requisitos={[
            "Split screen",
            "Click atualiza item selecionado",
            "Destaque item ativo",
          ]}
        ></Exercicio>
      </PageMainContent>
    </>
  );
};

export default RenderizacaoCondicional;
