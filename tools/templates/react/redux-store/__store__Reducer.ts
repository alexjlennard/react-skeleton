import I__store__State from './models/I__store__State';
import __store__Action from './__store__Action';
import BaseReducer from '../../utilities/BaseReducer';
import { Action } from "redux";

export default class __store__Reducer extends BaseReducer {
    public readonly initialState: I__store__State = {
        __model__(camelCase): null,
    };

    public [__store__Action.REQUEST___model__(constantCase)_FINISHED](state: I__store__State, action: Action): I__store__State {
        return {
            ...state
        };
    }
}
