import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import RouteEnum from '../constants/RouteEnum';
import LoadingIndicator from './components/loading-indicator/LoadingIndicator';

import logo from '../logo.svg';
import './App.css';
import Startup from './components/startup';

const Home = lazy(() => import('./pages/home'));
const NotFoundPage = lazy(() => import('./pages/not-found-page/NotFoundPage'));

class App extends React.Component {
    render() {
        return (
            <Startup>
                <ConnectedRouter history={this.props.history}>
                    <Suspense fallback={<LoadingIndicator isActive={true} />}>
                        <Switch>
                            <Route exact={true} path={RouteEnum.Home} component={Home} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </Suspense>
                </ConnectedRouter>
            </Startup>
        );
    }
}

App.propTypes = {
    history: PropTypes.object.isRequired,
};

export default App;
