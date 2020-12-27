import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import RequestingReducer from './requesting/RequestingReducer';
import ErrorReducer from './error/ErrorReducer';
import StartupReducer from './startup/StartupReducer';

export default (history) => {
    const reducerMap = {
        error: ErrorReducer.reducer,
        requesting: RequestingReducer.reducer,
        router: connectRouter(history),
        app: new StartupReducer().reducer,
    };

    return combineReducers(reducerMap);
};
