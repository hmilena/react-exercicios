import CardComposition from "./Composition";

const cards = [
    {
        id: 1,
        titulo: "Card 1",
        descricao: "Descricao do card 1",
        textBotao: "Saiba Mais",
    }, {
        id: 2,
        titulo: "Card 2",
        descricao: "Descricao do card 2",
        textBotao: "Saiba Mais",
    }, {
        id: 3,
        titulo: "Card 3",
        descricao: "Descricao do card 3",
        textBotao: "Saiba Mais",
    }, {
        id: 4,
        titulo: "Card 4",
        descricao: "Descricao do card 4",
        textBotao: "Saiba Mais",
    }, {
        id: 5,
        titulo: "Card 5",
        descricao: "Descricao do card 5",
        textBotao: "Saiba Mais",
    }
]

const MultipleChildren = () => {
    return (
        <div className="wrapper px-4 py-3">
            <div className="grid grid-cols-3 gap-5">
                {cards.map((card) => (
                    <CardComposition key={card.id} title={card.titulo} description={card.descricao} btnText={card.textBotao} />
                ))}
            </div>
        </div>
    );
};

export default MultipleChildren;