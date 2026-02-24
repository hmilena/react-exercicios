import { useId, useState } from "react";
const questions = [
  {
    id: 1,
    pergunta: "O que é uma closure em JavaScript?",
    escolhas: [
      "É uma função que só pode ser usada dentro de outra função.",
      "É quando uma função 'lembra' das variáveis do escopo onde foi criada, mesmo depois desse escopo ter terminado.",
      "É uma forma de proteger variáveis para que ninguém possa acessá-las.",
      "É um tipo especial de função usado apenas no React.",
    ],
    resposta: 1,
  },
  {
    id: 2,
    pergunta: "O que significa dizer que um componente React é 'controlado'?",
    escolhas: [
      "É um componente que só pode ser usado dentro de um formulário.",
      "É um componente cujo valor é controlado diretamente pelo DOM.",
      "É um componente cujo estado é controlado pelo React através de state.",
      "É um componente que não pode ter 'useState'",
    ],
    resposta: 2,
  },
];

const Quiz = () => {
  const id = useId();
  const name = useId();

  // Um estado por questão
  const [respostas, setRespostas] = useState({});
  const [score, setScore] = useState(0);
  const [atual, setAtual] = useState(0);
  const [verificado, setVerificado] = useState(false);

  const question = questions[atual];

  return (
    <div className="question flex relative flex-col gap-3 mb-7 rounded-xl border border-cyan-300 p-10 bg-zinc-700">
      <span className="uppercase text-xs font-mono text-neutral-400">
        Pergunta {atual + 1} de {questions.length}
      </span>

      <h4 className="text-white text-xl font-sans">{question.pergunta}</h4>

      <div className="grid gap-3">
        {question.escolhas.map((escolha, i) => {
          const inputId = `${id}-${i}`;
          const isChecked = respostas[atual] === i;
          const isRightAnswer = i === question.resposta;

          const classesDaLabel = [
            "group relative flex cursor-pointer rounded-lg gap-4 shadow-sm p-5",
            "border text-neutral-300 font-mono text-sm items-center",
            // Sem verificação: comportamento normal com amber
            !verificado &&
              "bg-neutral-800 border-gray-400 hover:border-gray-300",
            !verificado &&
              "has-[:focus-visible]:ring-1 has-[:focus-visible]:ring-amber-400",
            !verificado &&
              "has-[:checked]:border-amber-400 has-[:checked]:ring-1 has-[:checked]:ring-amber-400 has-[:checked]:bg-neutral-900",
            // Com verificação: verde se correta, vermelho se errada e selecionada
            verificado &&
              isRightAnswer &&
              "border-green-500 ring-1 ring-green-500 bg-green-950",
            verificado &&
              isChecked &&
              !isRightAnswer &&
              "border-red-500 ring-1 ring-red-500 bg-red-950",
            verificado &&
              !isRightAnswer &&
              !isChecked &&
              "border-gray-700 bg-neutral-800 opacity-50 cursor-default",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <label htmlFor={inputId} key={inputId} className={classesDaLabel}>
              <input
                id={inputId}
                type="radio"
                name={`${name}-${atual}`}
                checked={isChecked}
                onChange={() =>
                  !verificado && setRespostas({ ...respostas, [atual]: i })
                }
                className="sr-only"
              />
              <span className="font-bold text-amber-400 text-xs bg-neutral-900 border border-neutral-700 rounded-md py-1.5 px-2.5 shrink-0">
                {String.fromCharCode(65 + i)}
              </span>
              {escolha}
            </label>
          );
        })}
      </div>

      {atual < questions.length - 1 && (
        <div className="btns-w-full mt-5">
          {!verificado && (
            <button
              type="button"
              className="primary"
              onClick={() => {
                setVerificado(true);
                setScore(
                  respostas[atual] === question.resposta ? score + 1 : score,
                );
              }}
            >
              Verificar Resposta
            </button>
          )}

          {verificado && (
            <button
              type="button"
              className="primary"
              onClick={() => {
                setAtual(atual + 1);
                setVerificado(false);
              }}
            >
              Próxima
            </button>
          )}
        </div>
      )}

      {atual === questions.length - 1 && (
        <div className="btns-w-full mt-5">
          {!verificado && (
            <button
              type="button"
              className="primary"
              onClick={() => {
                setVerificado(true);
                setScore(
                  respostas[atual] === question.resposta ? score + 1 : score,
                );
              }}
            >
              Verificar Resposta
            </button>
          )}

          {verificado && (
            <div className="flex justify-between w-full mt-5">
              <span className="p-2 inline-flex rounded border border-emerald-500 bg-emerald-400 text-emerald-950 text-xs font-mono">
                Você acertou: {score} de {questions.length}
              </span>
              <button
                type="button"
                className="primary"
                onClick={() => {
                  setAtual(0);
                  setVerificado(false);
                  setScore(0);
                }}
              >
                Tentar de novo
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
