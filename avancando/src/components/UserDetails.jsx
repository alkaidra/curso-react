const UserDetails = ({ name, age, job }) => {
    return (
        <div>
            <h1>O nome é: { name }</h1>
            <p>A idade é: { age } anos e { age < 18 ? "não pode tirar carteira" : "pode tirar carteira"}</p>
            <p>A profissão é: { job }</p>
        </div>
    )
}

export default UserDetails