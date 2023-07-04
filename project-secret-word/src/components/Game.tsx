import { useRef, useState } from "react";

type GameProps = {
    verifyLetter: (letter: string) => void;
    pickedCategory: string;
    letters: string[];
    guessedLetters: string[];
    wrongLetters: string[];
    guesses: number;
    points: number;
};

export function Game({ verifyLetter, pickedCategory, letters, guessedLetters, wrongLetters, guesses, points }: GameProps) {

    const [letter, setLetter] = useState<string>('');
    const letterInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        verifyLetter(letter);
        setLetter("");
        letterInputRef.current?.focus();
    }

    return (
        <div
            className="game"
        >
            <p className="points">
                <span
                    className="font-bold"
                >
                    Pontuação: {points}
                </span>
            </p>
            <h1
                className="text-4xl font-bold"
            >
                Adivinhe a palavra
            </h1>
            <h3 className="tip">
                Dica sobre a palavra:
                <span
                    className="text-[#ecfa00]"
                > {pickedCategory.toUpperCase()}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s).</p>
            <div className="m-[1.5em] p-[1.5em] border-[20px] border-[#ecfa00] flex">
                {letters.map((letter: string, index: number) => (
                    guessedLetters.includes(letter) ? (
                        <span key={index} className="text-[70px] leading-[1.5] border-[3px] border-[#000] h-[100px] w-[100px] uppercase font-bold bg-white text-[#000]">{letter}</span>

                    ) : (
                        <span key={index} className="text-[70px] leading-[1.5] border-[3px] border-[#000] h-[100px] w-[100px] uppercase font-bold bg-white text-[#000]"></span>
                    )
                ))}
            </div>
            <div className="letterContainer">
                <p
                    className="mb-[1.2em]"
                >
                    Tente adivinhar uma letra da palavra:
                </p>
                <form
                    className="flex items-center justify-center"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="letter"
                        maxLength={1}
                        id="letter"
                        required
                        className="h-[50px] w-[50px] text-[2em] text-center mr-[1em] text-black outline-none"
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras erradas:</p>
                {wrongLetters.map((letter, key) => (
                    <span key={key}>{letter}, </span>
                ))}
            </div>
        </div>
    )
}