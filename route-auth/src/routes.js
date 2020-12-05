import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
        )
    )} />
);

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={() => <h1>Hello World</h1>} />
                <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;