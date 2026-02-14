import Exercicio from "../../components/shared/Exercicio";
import Greeting from "./Respostas/Greeting";
import greetingCode from "./Respostas/Greeting.jsx?raw";

import ProfileCard from "./Respostas/ProfileCard";
import profileCardCode from "./Respostas/ProfileCard.jsx?raw";

import Button from "./Respostas/Button";
import buttonCode from "./Respostas/Button.jsx?raw";

import Avatar from "./Respostas/Avatar";
import avatarCode from "./Respostas/Avatar.jsx?raw";

import All from "./Respostas/multiple/All";
import allCode from "./Respostas/multiple/All.jsx?raw";

import Price from "./Respostas/Price";
import priceCode from "./Respostas/Price.jsx?raw";

import CardComposition from "./Respostas/Composition";
import cardCompositionCode from "./Respostas/Composition.jsx?raw";

import StatusBadge from "./Respostas/StatusBadge";
import statusBadgeCode from "./Respostas/StatusBadge.jsx?raw";

import UserCard from "./Respostas/UserCard";
import userCardCode from "./Respostas/UserCard.jsx?raw";

import MultipleChildren from "./Respostas/MultipleChildren";
import multipleChildrenCode from "./Respostas/MultipleChildren.jsx?raw";

import IconButton from "./Respostas/IconButton";
import iconButtonCode from "./Respostas/IconButton.jsx?raw";

import RatingStars from "./Respostas/RatingStars";
import ratingStarsCode from "./Respostas/RatingStars.jsx?raw";

import ProductCard from "./Respostas/ProductCard";
import productCardCode from "./Respostas/ProductCard.jsx?raw";

const requisitosGreeting = [
    "Criar um componente chamado Greeting",
    "Receber uma prop 'name'",
    "Exibir 'Olá, [name]!'"
]

const requisitosProfileCard = [
    "Receba 3 props: nome, idade, profissao",
    "Exiba todas as informações organizadas",
    "Use uma div com className='card'"
]

const requisitosButton = [
    "Props: text (string), color (string)",
    "Use a cor como className",
    "Exiba o texto dentro do botão"
]

const requisitosAvatar = [
    "Props: imageUrl, nome, tamanho",
    "Exiba img com alt={nome}",
    "Aplique className baseado no tamanho",
    "Exemplo: avatar-small, avatar-medium, avatar-large"
]

const requisitosMultipleComponents = [
    "Cada componente retorna JSX diferente",
    "Organize verticalmente no App",
    "Cada um com className próprio",
    "Use grid para organizar os componentes"
]

const requisitosPrice = [
    "Prop: valor (number)",
    "Formate: R$ XX,XX  - com duas casas decimais. Ex: 100 -> R$ 100,00",
    "Use toFixed e replace"
]

const requisitosComposition = [
    "Props: title, description, btnText",
    "Estruture: título em h3, descrição em p, botão em button",
    "Aplique classes CSS adequadas"
]

const requisitosStatusBadge = [
    "Prop: status",
    "Cor verde para active, vermelho para inactive, amarelo para pending",
    "Use className dinâmico: badge-active, badge-inactive, badge-pending",
    "Dica: className={`badge badge-${status}`}"
]

const requisitosUserCard = [
    "Crie um componente chamado UserCard",
    "Prop: user (objeto com { nome, email, avatar, avatarSize })",
    "Use o componente de Avatar que criamos anteriormente",
    "O avatar deve ficar na esquerda",
    "Nome em h3 e email em a, do lado direito"
]

const requisitosMultipleChildren = [
    "Crie um componente MultipleChildren",
    "Use o componente CardComposition que já criamos",
    "Crie 5 cards com dados diferentes (pode usar array e .map)",
    "Organize em grid"
]

const requisitosIconButton = [
    "Props: icon, label",
    "Exiba ícone e label lado a lado",
    "Exemplo: 🏠 Home, ⚙️ Settings"
]

const requisitosRatingStars = [
    "Crie um componente chamado RatingStars",
    "Prop: rating (number)",
    "Exiba estrelas ★ baseadas no número",
    "Exemplo: 5 -> ★★★★★, 3 -> ★★★",
    "Dica: use Array.from({ length: rating }).map()",
    "Estilize o componente com Tailwind CSS"
]

const requisitosProductCard = [
    "Props: image, name, price, discount (opcional)",
    "Se tiver desconto, exiba preço riscado e novo preço",
    "Botão 'Adicionar ao Carrinho"
]

const Fundamentos = () => {
    return (
        <div className="flex flex-col gap-4 p-5 bg-white">
            <h1 className="text-2xl font-bold mb-4">MÓDULO 1: Fundamentos (Componentes, JSX, Props)</h1>

            {/* Hello Component */}
            <Exercicio
                titulo="Exercício 1.1: Hello Component"
                chamada="Crie um componente chamado Greeting que exibe 'Olá, Mundo!' em um h1"
                requisitos={requisitosGreeting}
                codigo={greetingCode}>
                <Greeting name="Mia" />
            </Exercicio>

            {/* Profile Card */}
            <Exercicio
                titulo="Exercício 1.2: Profile Card"
                chamada="Crie um componente ProfileCard que recebe nome, idade e profissão via props e exibe em um card."
                requisitos={requisitosProfileCard}
                codigo={profileCardCode}>
                <ProfileCard name="Mia" age="25" job="Developer" />
            </Exercicio>

            {/* Button Component */}
            <Exercicio
                titulo="Exercício 1.3: Button Component"
                chamada="Crie um componente Button que recebe 'text' e 'color' via props."
                requisitos={requisitosButton}
                codigo={buttonCode}>

                <div className="flex gap-2">
                    <Button text="SUCCESS" color="bg-green-500" />
                    <Button text="DANGER" color="bg-red-500" />
                    <Button text="WARNING" color="bg-yellow-500" />
                    <Button text="INFO" />
                </div>
            </Exercicio>

            {/* Avatar Component */}
            <Exercicio
                titulo="Exercício 1.4: Avatar Component"
                chamada="Crie um componente Avatar que recebe url da imagem, nome e tamanho (small/medium/large)."
                requisitos={requisitosAvatar}
                codigo={avatarCode}>
                <div className="mt-3 flex -space-x-2 items-center">
                    <Avatar name="Mia" imageUrl="https://wp.blogdamia.com.br/wp-content/uploads/2025/12/20251209_202622-scaled.avif" size="small" />
                    <Avatar name="Mia" imageUrl="https://wp.blogdamia.com.br/wp-content/uploads/2025/12/20251209_202622-scaled.avif" size="medium" />
                    <Avatar name="Mia" imageUrl="https://wp.blogdamia.com.br/wp-content/uploads/2025/12/20251209_202622-scaled.avif" size="large" />
                </div>
            </Exercicio>

            {/* Multiple Components */}
            <Exercicio
                titulo="Exercício 1.5: Multiple Components"
                chamada="Crie 4 componentes (Header, Sidebar,MainContent, Footer) e use todos no App."
                requisitos={requisitosMultipleComponents}
                codigo={allCode}>

                <All />
            </Exercicio>

            {/* Props com Números */}
            <Exercicio
                titulo="Exercício 1.6: Props com Números"
                chamada="Crie um componente Price que recebe valor (number) e exibe formatado com R$."
                requisitos={requisitosPrice}
                codigo={priceCode}>

                <Price price={100} />
            </Exercicio>

            {/* Composição de Componentes */}
            <Exercicio
                titulo="Exercício 1.7: Composição de Componentes"
                chamada="Crie um Card que recebe título, descrição e botão (todos via props)."
                requisitos={requisitosComposition}
                codigo={cardCompositionCode}>

                <CardComposition title="Conheça Lisboa" description="Maior cidade de Portugal espera por você!" btnText="Viajar" />
            </Exercicio>

            {/* Status Badge */}
            <Exercicio
                titulo="Exercício 1.8: Status Badge"
                chamada="Crie um componente StatusBadge que recebe 'status' (active/inactive/pending) e exibe badge colorido."
                requisitos={requisitosStatusBadge}
                codigo={statusBadgeCode}>

                <div className="flex gap-2">
                    <StatusBadge status="active" />
                    <StatusBadge status="inactive" />
                    <StatusBadge status="pending" />
                </div>

            </Exercicio>

            {/* Props de Objetos */}
            <Exercicio
                titulo="Exercício 1.9: Props de Objetos"
                chamada="Crie um componente UserCard que recebe um objeto 'user' com nome, email, avatar e tamanho do avatar."
                requisitos={requisitosUserCard}
                codigo={userCardCode}>

                <UserCard user={{ name: "Mia", email: "contato@blogdamia.com.br", avatar: "https://wp.blogdamia.com.br/wp-content/uploads/2025/12/20251209_202622-scaled.avif", avatarSize: "small" }} />
            </Exercicio>

            {/* Multiple Children */}
            <Exercicio
                titulo="Exercício 1.10: Multiple Children"
                chamada="Crie um App que renderiza 5 Cards com dados diferentes."
                requisitos={requisitosMultipleChildren}
                codigo={multipleChildrenCode}>

                <MultipleChildren />
            </Exercicio>

            {/* Icon Button */}
            <Exercicio
                titulo="Exercício 1.11: Icon Button"
                chamada="Crie um componente IconButton que recebe icon (emoji ou texto) e label."
                requisitos={requisitosIconButton}
                codigo={iconButtonCode}>

                <div className="inline-flex gap-4">
                    <IconButton icon="🏠" label="Home" />
                    <IconButton icon="⚙️" label="Settings" />
                </div>

            </Exercicio>

            {/* Rating Stars */}
            <Exercicio
                titulo="Exercício 1.12: Rating Stars"
                chamada="Crie um componente Rating que recebe número (1-5) e exibe estrelas ⭐."
                requisitos={requisitosRatingStars}
                codigo={ratingStarsCode}>

                <div className="inline-flex flex-col gap-4">
                    <RatingStars rating={5} />
                    <RatingStars rating={3} />
                    <RatingStars rating={1} />
                </div>

            </Exercicio>

            {/* Product Card */}
            <Exercicio
                titulo="Exercício 1.13: Product Card"
                chamada="Crie um ProductCard completo com imagem, nome, preço, desconto e botão."
                requisitos={requisitosProductCard}
                codigo={productCardCode}>

                <div className="grid grid-cols-2 gap-5">
                    <ProductCard
                        image="https://wp.blogdamia.com.br/wp-content/uploads/2025/12/image-1766573803377-768x1024.jpg"
                        name="Dualtron Victor Luxury Plus"
                        price={500}
                        discount={100}
                    />
                    <ProductCard
                        image="https://wp.blogdamia.com.br/wp-content/uploads/2025/12/image-1766573803377-768x1024.jpg"
                        name="Dualtron Victor Luxury Plus"
                        price={500}
                    />
                </div>

            </Exercicio>



        </div>
    )
}

export default Fundamentos;