import Exercicio from "../../components/shared/Exercicio";
import Greeting from "./Respostas/Greeting";
import ProfileCard from "./Respostas/ProfileCard";
import Button from "./Respostas/Button";

const requisitosGreeting = [
    "Criar um componente chamado Greeting",
    "Receber uma prop 'name'",
    "Exibir 'Olá, [name]!'"
]
const codeGreeting = `const Greeting = ({ name }) => {
    return <h1>Olá, {name}!</h1>
}

export default Greeting;

// uso
<Greeting name="Mia" />`

const requisitosProfileCard = [
    "Receba 3 props: nome, idade, profissao",
    "Exiba todas as informações organizadas",
    "Use uma div com className='card'"
]
const codeProfileCard = `const ProfileCard = ({ name, age, job }) => {
    return (
        <div className="card">
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{job}</p>
        </div>
    )
}

export default ProfileCard;

// uso
<ProfileCard name="Mia" age="25" job="Developer" />`

const requisitosButton = [
    "Props: text (string), color (string)",
    "Use a cor como className",
    "Exiba o texto dentro do botão"
]
const codeButton = `const Button = ({ text, color }) => {
	return <button className={color ? color : "bg-blue-500"}>{text}</button>
}

export default Button;`

const Fundamentos = () => {
    return (
        <div className="flex flex-col gap-4 p-5 bg-white">
            <h1 className="text-2xl font-bold mb-4">MÓDULO 1: Fundamentos (Componentes, JSX, Props)</h1>

            <Exercicio
                titulo="Exercício 1.1: Hello Component"
                chamada="Crie um componente chamado Greeting que exibe 'Olá, Mundo!' em um h1"
                requisitos={requisitosGreeting}
                codigo={codeGreeting}>
                <Greeting name="Mia" />
            </Exercicio>

            <Exercicio
                titulo="Exercício 1.2: Profile Card"
                chamada="Crie um componente ProfileCard que recebe nome, idade e profissão via props e exibe em um card."
                requisitos={requisitosProfileCard}
                codigo={codeProfileCard}>
                <ProfileCard name="Mia" age="25" job="Developer" />
            </Exercicio>

            <Exercicio
                titulo="Exercício 1.3: Button Component"
                chamada="Crie um componente Button que recebe 'text' e 'color' via props."
                requisitos={requisitosButton}
                codigo={codeButton}>
                <Button text="SUCCESS" color="bg-green-500" />
                <br /><br />
                <Button text="DANGER" color="bg-red-500" />
                <br /><br />
                <Button text="WARNING" color="bg-yellow-500" />
                <br /><br />
                <Button text="INFO" />
            </Exercicio>

        </div>
    )
}

export default Fundamentos;