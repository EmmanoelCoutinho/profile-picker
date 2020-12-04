import React from 'react';

//import elements of React Route
import { Switch, Route} from 'react-router-dom';

//importing pages
import App from './components/App';
import Template from './components/profile';
import Followerspage from './components/followersPage';
import Followingpage from './components/followingPage';
import Repospage from './components/reposPage';

    export const Routes = () => {
        return (
        <Switch>
            <Route path='/' component={App} exact />
            <Route path='/profile' component={Template} />
            <Route path='/followers' component={Followerspage} />
            <Route path='/following' component={Followingpage} />
            <Route path='/repos' component={Repospage} />
            <Route component={() => {<div>Page Error 404!</div>}} />

        </Switch>
        );
    }
    