import IWidgetsState from './models/IWidgetsState';
import WidgetsAction from './WidgetsAction';
import BaseReducer from '../../utilities/BaseReducer';
import { Action } from "redux";

export default class WidgetsReducer extends BaseReducer {
    public readonly initialState: IWidgetsState = {
        widget: null,
    };

    public [WidgetsAction.REQUEST_WIDGET_FINISHED](state: IWidgetsState, action: Action): IWidgetsState {
        return {
            ...state
        };
    }
}
