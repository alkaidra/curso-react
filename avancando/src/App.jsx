import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import Condicional from './components/Condicional';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import TesteFragment from './components/TesteFragment';
import Childrennn from './components/Childrennn';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

import './App.css';

import Img from './assets/images/logo512.png';
import { useState } from 'react';
import UserDetails from './components/UserDetails';

function App() {
    // const name = "João";
    
    const [setName] = useState('Maria');
    
    const cars = [
        {id: 1, brand: 'ferrari', km: 0, color: 'vermelho', newCar: true}
    ];
    
    function showMessage() {
        alert('bunitin');
    }

    const [message, setMessage] = useState("binito");

    const handleMessage = (changeMensage) => {
        setMessage(changeMensage);
    }

    const people = [
        {name: 'Joao', age: 18, job: 'dev'},
        {name: 'Pedro', age: 13, job: 'estudante'},
        {name: 'Rafa', age: 21, job: 'psicologa'}
    ];

    return (
        <div className="App">
            <h1>Avançando em React</h1>
            <img src="/img1.png" alt="Imagem 1" />
            <img src={Img} alt="imagem" />
            <ManageData />
            <ListRender />
            <Condicional />
            <ShowUserName name={ setName } />
            <CarDetails brand="bmw" km="0" color="branco" newCar={true} />
            <CarDetails brand="ford" km="4550" color="preto" newCar={false} />
            <CarDetails brand="vw" km="546545465460" color="vinho" newCar={false} />
            { cars.map((car) => (
                <CarDetails key={car.id} brand={car.brand} km={ car.km } color={ car.color } newCar={ car.newCar } />
            )) }
            <TesteFragment propsFragment='testeeeeee' />
            <Childrennn>
                <p>Bunito</p>
            </Childrennn>
            <Childrennn>
                <p>iti malia</p>
            </Childrennn>
            <ExecuteFunction myfunction={ showMessage }/>
            <Message message={ message } />
            <ChangeMessage handleMessage={ handleMessage } />
            {people.map((person) => (
                <UserDetails name={ person.name } age={ person.age } job={ person.job } />
            ))}
        </div>
    );
}

export default App;
