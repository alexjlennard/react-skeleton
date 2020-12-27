import WidgetResponseModel from './models/widget/WidgetResponseModel';
import WidgetsEffect from './WidgetsEffect';
import ActionUtility from '../../utilities/ActionUtility';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import { Dispatch, Store } from 'redux';

type ActionUnion = void | HttpErrorResponseModel | WidgetResponseModel;

export default class WidgetsAction {
    public static readonly REQUEST_WIDGET: string = 'WidgetsAction.REQUEST_WIDGET';

    public static readonly REQUEST_WIDGET_FINISHED: string = 'WidgetsAction.REQUEST_WIDGET_FINISHED';

    public static requestWidget(): any {
        return async (dispatch: Dispatch, getState: () => Store) => {
            await ActionUtility.createThunkEffect(dispatch, WidgetsAction.REQUEST_WIDGET, WidgetsEffect.requestWidget);
        };
    }
}
