import __model__ResponseModel from './models/__model__(kebabCase)/__model__ResponseModel';
import __store__Effect from './__store__Effect';
import ActionUtility from '../../utilities/ActionUtility';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import { Dispatch, Store } from 'redux';

type ActionUnion = void | HttpErrorResponseModel | __model__ResponseModel;

export default class __store__Action {
    public static readonly REQUEST___model__(constantCase): string = '__store__Action.REQUEST___model__(constantCase)';

    public static readonly REQUEST___model__(constantCase)_FINISHED: string = '__store__Action.REQUEST___model__(constantCase)_FINISHED';

    public static request__model__(): any {
        return async (dispatch: Dispatch, getState: () => Store) => {
            await ActionUtility.createThunkEffect(dispatch, __store__Action.REQUEST___model__(constantCase), __store__Effect.request__model__);
        };
    }
}
