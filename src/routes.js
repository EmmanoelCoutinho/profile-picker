import React from 'react';

//import elements of React Route
import { Switch, Route} from 'react-router-dom';

//importing pages
import App from './components/App';
import template from './components/profile';

    export const Routes = () => {
        return (
        <Switch>
            <Route path='/' component={App} exact />
            <Route path='/profile' component={template} />
            <Route component={() => {<div>Page Error 404!</div>}} />

        </Switch>
        );
    }
    