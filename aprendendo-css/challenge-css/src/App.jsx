import './App.css';
import Cars from './components/Cars';

function App() {
  const cars = [
    { id: 1, marca: 'gol', cor: 'vermelho' },
    { id: 2, marca: 'golf', cor: 'azul' },
    { id: 3, marca: 'fusca', cor: 'verde' }
  ];

  return (
    <div className="App">
      <h1>Carros:</h1>
      {cars.map((car) => (
        <div key={ car.id }>
          <Cars marca={car.marca} cor={car.cor} />
        </div>
      ))}
    </div>
  );
}

export default App;
