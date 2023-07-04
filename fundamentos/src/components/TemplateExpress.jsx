import MyComponent from "./MyComponent";

const TemplateEspress = () => {
    const name = 'Joao';
    const data = {
        job: 'dev',
        age: 18
    }
    return (
        <div>
            <h3>Olá { name }, tudo bem?</h3>
            <h3>Sua idade é: { data.age }</h3>
            <h3>Seu trabalho é: { data.job }</h3>
            <MyComponent />
        </div>
    );
}

export default TemplateEspress;