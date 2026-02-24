import { useId, useState } from "react";
const questions = [
  {
    id: 1,
    q: "O que é uma closure em JavaScript?",
    choices: [
      "É uma função que só pode ser usada dentro de outra função.",
      "É quando uma função 'lembra' das variáveis do escopo onde foi criada, mesmo depois desse escopo ter terminado.",
      "É uma forma de proteger variáveis para que ninguém possa acessá-las.",
      "É um tipo especial de função usado apenas no React.",
    ],
    a: 1,
  },
  {
    id: 2,
    q: "O que significa dizer que um componente React é 'controlado'?",
    choices: [
      "É um componente que só pode ser usado dentro de um formulário.",
      "É um componente cujo valor é controlado diretamente pelo DOM.",
      "É um componente cujo estado é controlado pelo React através de state.",
      "É um componente que não pode ter 'useState'",
    ],
    a: 2,
  },
];

const Quiz = () => {
  const id = useId();
  const name = useId();

  // Um estado por questão
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [isVerified, setisVerified] = useState(false);

  const question = questions[currentValue];

  return (
    <div className="question flex relative flex-col gap-3 mb-7 rounded-xl border border-cyan-300 p-10 bg-zinc-700">
      <span className="uppercase text-xs font-mono text-neutral-400">
        Pergunta {currentValue + 1} de {questions.length}
      </span>

      <h4 className="text-white text-xl font-sans">{question.q}</h4>

      <div className="grid gap-3">
        {question.choices.map((choice, i) => {
          const inputId = `${id}-${i}`;
          const isChecked = answers[currentValue] === i;
          const isRightAnswer = i === question.a;

          const labelClasses = [
            "group relative flex cursor-pointer rounded-lg gap-4 shadow-sm p-5",
            "border text-neutral-300 font-mono text-sm items-center",
            // Sem verificação: comportamento normal com amber
            !isVerified &&
              "bg-neutral-800 border-gray-400 hover:border-gray-300",
            !isVerified &&
              "has-[:focus-visible]:ring-1 has-[:focus-visible]:ring-amber-400",
            !isVerified &&
              "has-[:checked]:border-amber-400 has-[:checked]:ring-1 has-[:checked]:ring-amber-400 has-[:checked]:bg-neutral-900",
            // Com verificação: verde se correta, vermelho se errada e selecionada
            isVerified &&
              isRightAnswer &&
              "border-green-500 ring-1 ring-green-500 bg-green-950",
            isVerified &&
              isChecked &&
              !isRightAnswer &&
              "border-red-500 ring-1 ring-red-500 bg-red-950",
            isVerified &&
              !isRightAnswer &&
              !isChecked &&
              "border-gray-700 bg-neutral-800 opacity-50 cursor-default",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <label htmlFor={inputId} key={inputId} className={labelClasses}>
              <input
                id={inputId}
                type="radio"
                name={`${name}-${currentValue}`}
                checked={isChecked}
                onChange={() =>
                  !isVerified && setAnswers({ ...answers, [currentValue]: i })
                }
                className="sr-only"
              />
              <span className="font-bold text-amber-400 text-xs bg-neutral-900 border border-neutral-700 rounded-md py-1.5 px-2.5 shrink-0">
                {String.fromCharCode(65 + i)}
              </span>
              {choice}
            </label>
          );
        })}
      </div>

      {currentValue < questions.length - 1 && (
        <div className="btns-w-full mt-5">
          {!isVerified && (
            <button
              type="button"
              className="primary"
              onClick={() => {
                setisVerified(true);
                setScore(
                  answers[currentValue] === question.a ? score + 1 : score,
                );
              }}
            >
              Verificar Resposta
            </button>
          )}

          {isVerified && (
            <button
              type="button"
              className="primary"
              onClick={() => {
                setCurrentValue(currentValue + 1);
                setisVerified(false);
              }}
            >
              Próxima
            </button>
          )}
        </div>
      )}

      {currentValue === questions.length - 1 && (
        <div className="btns-w-full mt-5">
          {!isVerified && (
            <button
              type="button"
              className="primary"
              onClick={() => {
                setisVerified(true);
                setScore(
                  answers[currentValue] === question.a ? score + 1 : score,
                );
              }}
            >
              Verificar Resposta
            </button>
          )}

          {isVerified && (
            <div className="flex justify-between w-full mt-5">
              <span className="p-2 inline-flex rounded border border-emerald-500 bg-emerald-400 text-emerald-950 text-xs font-mono">
                Você acertou: {score} de {questions.length}
              </span>
              <button
                type="button"
                className="primary"
                onClick={() => {
                  setCurrentValue(0);
                  setisVerified(false);
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
