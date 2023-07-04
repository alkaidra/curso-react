import { useState } from "react";

const Challenge = () => {
    const [num, setNum] = useState(0);
    const num1 = 1;
    const num2 = 2;

    return (
        <div>
            <p>Valor soma: { num === 6 ? "Não pode 6" : num }</p>
            <p>Numero um: { num1 }</p>
            <p>Numero dois: { num2 }</p>
            <button onClick={() => setNum((num1 + num2) + num)}>Clique para somar os dois</button>
        </div>
    )
}

export default Challenge;
