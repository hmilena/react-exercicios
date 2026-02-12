import Exercicio from "../../components/shared/Exercicio";
import Greeting from "./Respostas/Greeting";
import ProfileCard from "./Respostas/ProfileCard";
import Button from "./Respostas/Button";
import Avatar from "./Respostas/Avatar";
import All from "./Respostas/multiple/All";
import Price from "./Respostas/Price";

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

const requisitosAvatar = [
    "Props: imageUrl, nome, tamanho",
    "Exiba img com alt={nome}",
    "Aplique className baseado no tamanho",
    "Exemplo: avatar-small, avatar-medium, avatar-large"
]
const codeAvatar = `const sizes = {
    small: "avatar-small h-12 w-12",
    medium: "avatar-medium h-24 w-24",
    large: "avatar-large h-36 w-36"
}

const Avatar = ({ imageUrl, name = 'Avatar', size = "medium" }) => {
    const sizesClasses = sizes[size] || sizes.medium;
    const baseClasses = "inline-block rounded-full ring-2 ring-white aspect-3/2 object-cover";

  return <img src={imageUrl} alt={name} className={\`\\\${sizesClasses} \\\${baseClasses}\`} />;

}

export default Avatar;`

const requisitosMultipleComponents = [
    "Cada componente retorna JSX diferente",
    "Organize verticalmente no App",
    "Cada um com className próprio",
    "Use grid para organizar os componentes"
]
const codeMultipleComponents = `//header.jsx 
const Header = () => {
    return <header className="main-header">Header</header>;
}
export default Header; c

//footer.jsx
const Footer = () => {
    return <footer className="main-footer">Footer</footer>;
}
export default Footer;

//sidebar.jsx
const Sidebar = () => {
    return <aside className="main-sidebar">Sidebar</aside>;
}
export default Sidebar;

//maincontent.jsx
const MainContent = () => {
    return <main>Content</main>;
}
export default MainContent;

//App.jsx
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const App = () => {
  return (
	  <div className="wrapper">
      <Header />
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;

/css
.exe-multiplo .grid>* {
    @apply border;
    @apply p-2;
    @apply rounded-md;
    @apply text-center;
    @apply font-bold;
    @apply border-sky-300;
    @apply text-blue-500;
}

.main-header {
    @apply col-span-2;
}

.main-sidebar {
    @apply row-start-2;
}

.main-content {
    @apply row-start-2;
}

.main-footer {
    @apply col-span-2;
}
`;

const requisitosPrice = [
    "Prop: valor (number)",
    "Formate: R$ XX,XX  - com duas casas decimais. Ex: 100 -> R$ 100,00",
    "Use toFixed e replace"
]
const codePrice = `const Price = ({ price }) => {
    return <div>R$ {price.toFixed(2).replace('.', ',')}</div>;
}
export default Price;`

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

                <div className="flex gap-2">
                    <Button text="SUCCESS" color="bg-green-500" />
                    <Button text="DANGER" color="bg-red-500" />
                    <Button text="WARNING" color="bg-yellow-500" />
                    <Button text="INFO" />
                </div>
            </Exercicio>

            <Exercicio
                titulo="Exercício 1.4: Avatar Component"
                chamada="Crie um componente Avatar que recebe url da imagem, nome e tamanho (small/medium/large)."
                requisitos={requisitosAvatar}
                codigo={codeAvatar}>
                <div className="mt-3 flex -space-x-2 items-center">
                    <Avatar name="Mia" imageUrl="https://wp.blogdamia.com.br/wp-content/uploads/2025/12/20251209_202622-scaled.avif" size="small" />
                    <Avatar name="Mia" imageUrl="https://wp.blogdamia.com.br/wp-content/uploads/2025/12/20251209_202622-scaled.avif" size="medium" />
                    <Avatar name="Mia" imageUrl="https://wp.blogdamia.com.br/wp-content/uploads/2025/12/20251209_202622-scaled.avif" size="large" />
                </div>
            </Exercicio>

            <Exercicio
                titulo="Exercício 1.5: Multiple Components"
                chamada="Crie 4 componentes (Header, Sidebar,MainContent, Footer) e use todos no App."
                requisitos={requisitosMultipleComponents}
                codigo={codeMultipleComponents}>

                <All />
            </Exercicio>

            <Exercicio
                titulo="Exercício 1.6: Props com Números"
                chamada="Crie um componente Price que recebe valor (number) e exibe formatado com R$."
                requisitos={requisitosPrice}
                codigo={codePrice}>

                <Price price={100} />
            </Exercicio>

        </div>
    )
}

export default Fundamentos;