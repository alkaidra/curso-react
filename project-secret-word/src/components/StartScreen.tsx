type StartScreenProps = {
    startGame: () => void;
};

export function StartScreen({ startGame }: StartScreenProps) {
    return (
        <div>
            <h1
                className="text-4xl font-bold"
            >
                Secret Word
            </h1>

            <p
                className="my-4 text-yellow-300"
            >
                Clique no botão abaixo para começar a jogar
            </p>

            <button
                onClick={startGame}
            >
                Começar o jogo
            </button>
        </div>
    )
}