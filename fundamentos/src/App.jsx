import FirstComponent from './components/FirstComponent';
import TemplateEspress from './components/TemplateExpress';
import Events from './components/Events';
import Challenge from './components/Challenge';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Olá Mundo</h1>
      <FirstComponent />
      <TemplateEspress />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
