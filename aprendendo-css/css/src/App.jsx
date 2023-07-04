import Teste from './components/Teste';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

import './App.css';

function App() {

    const n = 17;
    const redTitle = true;

    return (
        <div className='App'>
            <Teste />
            <MyComponent />
            <p>teste de css do componente</p>
            <p style={{color: "red", padding: "20px", borderTop: "8px solid red"}}>teste de css inline</p>
            <p style={ n > 10 ? {backgroundColor: "green", color: "yellow"} : {backgroundColor: "red", color: "white"} }>teste de css dinamico</p>
            <p style={ n < 10 ? null : {backgroundColor: "red", color: "white"} }>teste de css dinamico</p>
            <h2 className={ redTitle ? "red-title" : "my-component-paragraph" }>testando classe dinamica</h2>
            <Title />
            <span>teste module</span>
        </div>
    );
}

export default App;
