import { useState } from "react"

const Condicional = () => {
  const [x] = useState(true);
  const [name, setName] = useState('TESTE');
  return (
    <div>
        <h1>Isso vai aparecer?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}

        {name === 'João' ? <p>O nome certo é {name}</p> : <p>O nome certo não é {name}</p>}

        <button onClick={() => setName('João')}>Adicionar nome certo</button>
    </div>
  )
}

export default Condicional