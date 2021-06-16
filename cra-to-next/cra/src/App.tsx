import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <h1>Home (CRA)</h1> } /> 
        <Route path="/products" component={() => <h1>Products (CRA)</h1> } /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
