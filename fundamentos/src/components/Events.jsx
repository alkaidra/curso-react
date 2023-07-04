const Events = () => {
    const handleMyEvent = (e) => {
        console.log('Evento ativado!');
    }

    const render = (x) => {
        if (x) {
            return (<p>true</p>);
        } else {
            return (<p>false</p>);
        }
    }

    return (
        <div>
            <div id="aulaEventos1">
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div id="aulaEventos2">
                <button onClick={() => {console.log('clicou')}}>Clique aqui também!</button>
                <button onClick={() => {
                    if (true) {
                        console.log('Nunca faça eventos dessa forma!');
                    }
                }}>Clique aqui TAMBEM!</button>
            </div>
            {render(true)}
            {render(false)}
        </div>
    );
}

export default Events;