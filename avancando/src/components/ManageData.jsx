import { useState } from "react"

const ManageData = () => {
    const [num, setNum] = useState(0);

    return (
        <div>
            <h4>Numero: { num }</h4>
            <button type="button" onClick={() => setNum(num + 1)}>Adiciona um</button>
        </div>
    )
}

export default ManageData