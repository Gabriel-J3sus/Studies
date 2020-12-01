import { Form } from '@unform/web';

import './App.css';

import Input from './components/Form/input';

const initialData = {
  email: 'gabr.jesus001@gmail.com',
}

function App() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>

      <Form initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name"/>
        <Input type="email" name="email"/>
        <Input type="password" name="password"/>

        <button type='submit'>Enviar</button>
      </Form>

    </div>
  );
}

export default App;
