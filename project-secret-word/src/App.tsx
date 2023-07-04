import { useCallback, useEffect, useState } from "react";

import { StartScreen } from "./components/StartScreen";
import { Game } from "./components/Game";
import { GameOver } from "./components/GameOver";

import { wordList } from "./data/words";

const stages = [
    { id: 1, name: 'start' },
    { id: 2, name: 'game' },
    { id: 3, name: 'end' }
];

export default function App() {

    const [gameStage, setGameStage] = useState<string>(stages[0].name);
    const [words] = useState<any>(wordList);
    const [pickedWord, setPickedWord] = useState<string>('');
    const [pickedCategory, setPickedCategory] = useState<string>('');
    const [letters, setLetters] = useState<string[]>([]);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [wrongLetters, setWrongLetters] = useState<string[]>([]);
    const [guesses, setGuesses] = useState<number>(3);
    const [points, setPoints] = useState<number>(0);


    const clearLetterStates = useCallback(() => {
        setLetters([]);
        setGuessedLetters([]);
        setWrongLetters([]);
    }, [setLetters, setGuessedLetters, setWrongLetters]);

    // useEffect(() => {

    // }, [guesses, clearLetterStates, setGameStage]);

    const pickWordAndCategory = useCallback((): string[] => {
        const categories = Object.keys(words);
        const category = categories[Math.floor(Math.random() * categories.length)];

        const word = words[category][Math.floor(Math.random() * words[category].length)];

        return [word, category];
    }, [words]);

    const startGame = useCallback(() => {
        const [word, category] = pickWordAndCategory();

        let wordLetters = word.split('');
        wordLetters = wordLetters.map((letter: string) => letter.toLowerCase());

        setLetters(wordLetters);
        setPickedWord(word);
        setPickedCategory(category);

        setGameStage(stages[1].name);
    }, [pickWordAndCategory]);

    useEffect(() => {
        const uniqueLetters = [...new Set(letters)];

        if (guessedLetters.length === uniqueLetters.length) {
            setPoints(points + 10);
            clearLetterStates();
            startGame();
        }
    }, [guesses, guessedLetters, letters, startGame, points, clearLetterStates]);

    function verifyLetter(letter: string) {
        if (guesses > 0) {
            const normalizedLetter = letter.toLowerCase();

            if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
                return;
            }

            if (letters.includes(normalizedLetter)) {
                setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter]);
            } else {
                setWrongLetters([...wrongLetters, normalizedLetter]);
                setGuesses(guesses - 1);
            }
        } else {
            setGameStage(stages[2].name);
            clearLetterStates();
        }
    }

    const retry = () => {
        setPoints(0);
        setGuesses(3);

        setGameStage(stages[0].name);
    };

    return (
        <div className="flex justify-center items-center text-center p-4">
            {gameStage == 'start' &&
                <StartScreen
                    startGame={startGame}
                />
            }
            {gameStage == 'game' &&
                <Game
                    verifyLetter={verifyLetter}
                    pickedCategory={pickedCategory}
                    letters={letters}
                    guessedLetters={guessedLetters}
                    wrongLetters={wrongLetters}
                    guesses={guesses}
                    points={points}
                />
            }
            {gameStage == 'end' &&
                <GameOver
                    pickedWord={pickedWord}
                    retry={retry}
                    points={points}
                />
            }
        </div>
    )
}