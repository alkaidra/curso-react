function CarDetails({ brand, km, color, newCar }) {
    return (
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: { brand }</li>
                <li>Quilometragem: { km } km</li>
                <li>Cor: { color } </li>
                <li>Carro novo: { newCar ? "sim, o carro é novo" : "não, o carro é velho" } </li>
            </ul>
        </div>
    )
}

export default CarDetails;