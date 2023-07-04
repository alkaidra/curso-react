import { useState } from "react";

const ListRender = () => {
    const [num, setNum] = useState(1);

    const [list] = useState(['Joao', 'Matheus', 'Josias']);

    const [users, setUsers] = useState([
        { id: 1, name: 'Joao', age: 45 },
        { id: 2, name: 'Marcos', age: 55 },
        { id: 3, name: 'Junico', age: 77 }
    ]);

    const deleteRandom = (num) => {

        setNum(num + 1);

        const randomNumber = num;

        setUsers((prevUsers) => {
            return prevUsers.filter((users) => randomNumber !== users.id);
        });
    };

    return (
        <div>
            <ul>
                {list.map((item, i) => {
                    return <li key={i}>{item}</li>
                })}
            </ul>
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>Name: {user.name} - Age: {user.age}</li>
                })}
            </ul>
            <button onClick={() => deleteRandom(num)}>Deletar usuario aleatorio</button>
        </div>
    )
}

export default ListRender