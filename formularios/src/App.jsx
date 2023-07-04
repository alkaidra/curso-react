import Form from "./components/Form.tsx";
import FormLabel from "./components/FormLabel.tsx";

import './App.css';

function App() {
  return (
    <div className="App">
      <Form />
      <FormLabel user={{name: 'BUTAAAAAAAAAAA', email: 'joaozinho@gmail.com', bio: 'dev', role: 'editor'}} />
    </div>
  );
}

export default App;
