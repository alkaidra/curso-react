type GameOverProps = {
    retry: () => void;
    pickedWord: string;
    points: number;
};

export function GameOver({ retry, pickedWord, points }: GameOverProps) {
    return (
        <div>
            <h1
                className="text-4xl font-bold"
            >
                Fim de jogo
            </h1>
            <h2>
                A sua pontuação foi de:
                <span
                    className="font-bold text-[#ecfa00] text-[1.5em]"
                >
                    {" " + points}
                </span>
            </h2>
            <h3>
                A palavra era:
                <span
                    className="font-bold text-[#ecfa00] text-[1.5em]"
                >
                    {" " + pickedWord}
                </span>
            </h3>
            <button
                onClick={retry}
            >
                Recomeçar o jogo
            </button>
        </div>
    )
}