import environment from 'environment';
import WidgetResponseModel from './models/widget/WidgetResponseModel';
import EffectUtility from '../../utilities/EffectUtility';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';

export default class WidgetsEffect {
    public static async requestWidget(): Promise<WidgetResponseModel | HttpErrorResponseModel> {
        const endpoint: string = environment.api.widget;

        return EffectUtility.getToModel(WidgetResponseModel, endpoint);
    }
}
