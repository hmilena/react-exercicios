import { useState } from "react";
import PageMainTitle from "../../components/shared/PageMainTitle";
import PageMainContent from "../../components/shared/PageMainContent";
import Exercicio from "../../components/shared/Exercicio";

import Counter1 from "./Respostas/Counter1";
import counter1Code from "./Respostas/Counter1.jsx?raw";

import Counter2 from "./Respostas/Counter2";
import counter2Code from "./Respostas/Counter2.jsx?raw";

import Counter3 from "./Respostas/Counter3";
import counter3Code from "./Respostas/Counter3.jsx?raw";

import InputText from "./Respostas/InputText";
import inputTextCode from "./Respostas/InputText.jsx?raw";

import CharacterCounter from "./Respostas/CharacterCounter";
import characterCounterCode from "./Respostas/CharacterCounter.jsx?raw";

import ToggleButton from "./Respostas/ToggleButton";
import toggleButtonCode from "./Respostas/ToggleButton.jsx?raw";

import ToggleContent from "./Respostas/ToggleContent";
import toggleContentCode from "./Respostas/ToggleContent.jsx?raw";

import InputValidation from "./Respostas/InputValidation";
import inputValidationCode from "./Respostas/InputValidation.jsx?raw";

import ColorPicker from "./Respostas/ColorPicker";
import colorPickerCode from "./Respostas/ColorPicker.jsx?raw";

import FontSizeController from "./Respostas/FontSizeController";
import fontSizeControllerCode from "./Respostas/FontSizeController.jsx?raw";

import MultipleInputForm from "./Respostas/MultipleInputForm";
import multipleInputFormCode from "./Respostas/MultipleInputForm.jsx?raw";

import PasswordToggle from "./Respostas/PasswordToggle";
import passwordToggleCode from "./Respostas/PasswordToggle.jsx?raw";

import ShoppingProduct from "./Respostas/Shopping/ShoppingProduct";
import shoppingProductCode from "./Respostas/Shopping/ShoppingProduct.jsx?raw";
import shoppingCartCounterCode from "./Respostas/ShoppingCartCounter.jsx?raw";

import LikeButton from "./Respostas/LikeButton";
import likeButtonCode from "./Respostas/LikeButton.jsx?raw";

import RandomNumberGenerator from "./Respostas/RandomNumberGenerator";
import randomNumberGeneratorCode from "./Respostas/RandomNumberGenerator.jsx?raw";

import TemperatureConverter from "./Respostas/TemperatureConverter";
import temperatureConverterCode from "./Respostas/TemperatureConverter.jsx?raw";

import Quiz from "./Respostas/Quiz";
import quizCode from "./Respostas/Quiz.jsx?raw";

import Wizard from "./Respostas/Wizard";
import wizardCode from "./Respostas/Wizard.jsx?raw";

import Timer from "./Respostas/Timer";
import timerCode from "./Respostas/Timer.jsx?raw";

import ShoppingList from "./Respostas/ShoppingList";
import shoppingListCode from "./Respostas/ShoppingList.jsx?raw";

const StateInteratividade = () => {
  const [isFirstToggleOn, setIsFirstToggleOn] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const fruits = ["Maça", "Laranja", "Melancia", "Uva"];

  return (
    <>
      <PageMainTitle title="MÓDULO 2: State e Interatividade (useState, Event Handlers, Forms)" />

      <PageMainContent>
        <Exercicio
          titulo="Exercício 2.1: Simple Counter"
          chamada="Crie um contador que inicia em 0 com botão para incrementar"
          requisitos={[
            "useState para o contador",
            "Botão '+1' que incrementa",
            "Exiba o valor atual",
            "Dica: const [count, setCount] = useState(0)",
          ]}
          codigo={counter1Code}
        >
          <Counter1 />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.2: Counter com Decremento"
          chamada="Adicione botão de decremento ao contador."
          requisitos={[
            "Botões +1 e -1",
            "Impedir valores negativos",
            "Exibir mensagem se tentar ir abaixo de 0",
            "Dica: Use if (count > 0) antes de decrementar",
          ]}
          codigo={counter2Code}
        >
          <Counter2 />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.3: Reset Counter"
          chamada="Adicione botão Reset que volta contador para 0."
          requisitos={[
            "Botões +, -, Reset",
            "Reset deve setCount(0)",
            "Desabilite Reset quando já estiver em 0",
            "Dica: disabled={count === 0}",
          ]}
          codigo={counter3Code}
        >
          <Counter3 />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.4: Input de Texto"
          chamada="Crie input que exibe em tempo real o que você digita."
          requisitos={[
            "Input controlado (value={state})",
            "onChange atualiza o state",
            "Exiba o texto embaixo do input",
            "Dica: onChange={(e) => setText(e.target.value)}",
          ]}
          codigo={inputTextCode}
        >
          <InputText />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.5: Character Counter"
          chamada="Input que mostra quantos caracteres você digitou."
          requisitos={[
            "Input de texto controlado",
            "Exiba 'X caracteres' abaixo",
            "Limite máximo de 100 caracteres",
            "Dica: Use text.length e maxLength={100}",
          ]}
          codigo={characterCounterCode}
        >
          <CharacterCounter />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.6: Toggle Button"
          chamada="Botão que alterna entre ON e OFF."
          requisitos={[
            "useState booleano",
            "Clique alterna o estado",
            "Mude o texto do botão baseado no estado",
            "Aplique className diferente (on/off)",
            "Dica: setIsOn(!isOn)",
          ]}
          codigo={`// no pai
const [isFirstToggleOn, setIsFirstToggleOn] = useState(false);

// no componente
${toggleButtonCode}

// na chamada
<ToggleButton checked={isFirstToggleOn} onChange={setIsFirstToggleOn} />
                    `}
        >
          <ToggleButton
            checked={isFirstToggleOn}
            onChange={setIsFirstToggleOn}
          />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.7: Show/Hide Content"
          chamada="Botão que mostra/esconde um parágrafo de texto."
          requisitos={[
            "Botão 'Mostrar' / 'Esconder'",
            "Conteúdo só aparece quando visível",
            "Use renderização condicional",
            "Dica: {isVisible && <p>Conteúdo...</p>}",
          ]}
          codigo={`
// no pai
const [isOn, setIsOn] = useState(false);

//no componente
${toggleContentCode}

//na chamada
<ToggleContent checked={isOn} onChange={setIsOn} styleClasses="text-xs text-amber-500">Conteúdo que aparece quando está ON</ToggleContent>
`}
        >
          <ToggleContent
            checked={isOn}
            onChange={setIsOn}
            styleClasses="text-xs text-amber-500"
          >
            Conteúdo que aparece quando está ON
          </ToggleContent>
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.8: Input com Validação"
          chamada="Input de email que valida se tem @."
          requisitos={[
            "Input de email controlado",
            "Exiba mensagem de erro se não tiver @",
            "Mensagem de sucesso se válido",
            "Dica: email.includes('@')",
          ]}
          codigo={inputValidationCode}
        >
          <InputValidation />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.9: Color Picker"
          chamada="Crie um componente que tenha 3 botões (Vermelho, Verde, Azul) 
                    que mudam a cor de um box."
          requisitos={[
            "useState para cor atual",
            "3 botões que setam cores diferentes",
            "Box com cor de fundo dinâmico",
          ]}
          codigo={colorPickerCode}
        >
          <ColorPicker />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.10: Font Size Controller"
          chamada="Botões para aumentar/diminuir tamanho da fonte de um texto."
          requisitos={[
            "useState para tamanho (começa em 16)",
            "Botões A+ e A-",
            "Aplique fontSize dinamicamente",
            "Limite entre 10px e 50px",
            "Dica: style={{ fontSize: `${size}px` }}",
          ]}
          codigo={fontSizeControllerCode}
        >
          <FontSizeController />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.11: Multiple Inputs Form"
          chamada="Formulário com nome, email e mensagem."
          requisitos={[
            "3 inputs controlados",
            "Botão Submit que exibe os dados no console",
            "preventDefault no submit",
            "Dica: Use um objeto para o state: {nome: '', email: '', mensagem: ''}",
          ]}
          codigo={multipleInputFormCode}
        >
          <MultipleInputForm />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.12: Password Toggle"
          chamada="Input de senha com botão para mostrar/esconder."
          requisitos={[
            "Input com type='password' ou 'text'",
            "Botão toggle tipo 👁️",
            "Alterne entre password e text",
            "Dica: type={showPassword ? 'text' : 'password'}",
          ]}
          codigo={passwordToggleCode}
        >
          <PasswordToggle />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.13: Shopping Cart Counter"
          chamada="Produto com botões + e - para quantidade, exibir total."
          requisitos={[
            "Quantidade começa em 1",
            "Não permitir quantidade < 1",
            "Exibir: Quantidade x Preço = Total",
            "Exemplo: 3 x R$ 50,00 = R$ 150,00",
          ]}
          codigo={`//shoppingCartCounterCode.jsx ${shoppingCartCounterCode} 

//shoppingProductCode.jsx 
${shoppingProductCode}

//chamada
<ShoppingProduct
    image="https://wp.blogdamia.com.br/wp-content/uploads/2025/12/image-1766573803377-768x1024.jpg"
    name="Dualtron Victor Luxury Plus Ultra Blaster"
    category="Patinete"
    price={2351}
/>
`}
        >
          <div className="inline-flex flex-col w-150">
            <ShoppingProduct
              image="https://wp.blogdamia.com.br/wp-content/uploads/2025/12/image-1766573803377-768x1024.jpg"
              name="Dualtron Victor Luxury Plus"
              category="Patinete"
              price={500}
            />
            <ShoppingProduct
              image="https://wp.blogdamia.com.br/wp-content/uploads/2025/12/image-1766573803377-768x1024.jpg"
              name="Dualtron Victor Luxury Plus Ultra Blaster"
              category="Patinete"
              price={2351}
            />
            <ShoppingProduct
              image="https://wp.blogdamia.com.br/wp-content/uploads/2025/08/image-scaled.avif"
              name="Go-Go Town!"
              category="Game"
              price={30}
            />
          </div>
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.14: Like Button"
          chamada="Botão de like que conta cliques e muda de cor."
          requisitos={[
            "Contador de likes",
            "Botão fica azul quando liked",
            "Clique novamente remove o like (unlike)",
            "Dica: Combine useState para count e isLiked",
          ]}
          codigo={likeButtonCode}
        >
          <LikeButton />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.15: Random Number Generator"
          chamada="Botão que gera número aleatório entre 1 e 100."
          requisitos={[
            "Exiba o número gerado",
            "Botão 'Gerar Novo'",
            "Contador de quantas vezes gerou",
            "Dica: Math.floor(Math.random() * 100) + 1",
          ]}
          codigo={randomNumberGeneratorCode}
        >
          <RandomNumberGenerator min={1} max={100} />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.16: Temperature Converter"
          chamada="Converta Celsius para Fahrenheit e vice-versa."
          requisitos={[
            "Input para Celsius",
            "Calcule e exiba Fahrenheit automaticamente",
            "Fórmulas: F = C * 1.8 + 32 | C = (F - 32) / 1.8",
            "Dica: Atualize quando celsius mudar",
          ]}
          codigo={temperatureConverterCode}
        >
          <TemperatureConverter />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.17: Multi-Step Form"
          chamada="Formulário em 3 etapas (Dados Pessoais → Endereço → Confirmação)."
          requisitos={[
            "useState para step (1, 2, 3)",
            "Botões Próximo / Anterior",
            "Exiba conteúdo diferente por step",
            "Último step mostra resumo",
          ]}
          codigo={wizardCode}
        >
          <Wizard />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.18: Quiz Question"
          chamada="Pergunta de quiz com múltipla escolha."
          requisitos={[
            "Exiba pergunta e 4 opções",
            "Usuário seleciona uma",
            "Botão 'Verificar' mostra se acertou",
            "useState para resposta selecionada e se mostrou resultado",
          ]}
          codigo={quizCode}
        >
          <Quiz />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.19: Timer Simples"
          chamada="Contador regressivo de segundos."
          requisitos={[
            "Input para definir segundos",
            "Botão Iniciar",
            "Decrementa a cada segundo",
            "Exibe 'Tempo esgotado!' ao chegar em 0",
            "Dica: Use setInterval dentro de uma função, não dentro do componente diretamente por enquanto",
          ]}
          codigo={timerCode}
        >
          <Timer />
        </Exercicio>

        <Exercicio
          titulo="Exercício 2.20: Shopping List"
          chamada="Lista de compras com input para adicionar items."
          requisitos={[
            "Input para novo item",
            "Botão Adicionar",
            "Exiba lista de items",
            "Botão X para remover cada item",
            "Contador de total de items",
            "Dica: Use array no state e .filter() para remover",
          ]}
          codigo={shoppingListCode}
        >
          <ShoppingList list={fruits} />
        </Exercicio>
      </PageMainContent>
    </>
  );
};

export default StateInteratividade;
