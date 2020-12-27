import environment from 'environment';
import __model__ResponseModel from './models/__model__(kebabCase)/__model__ResponseModel';
import EffectUtility from '../../utilities/EffectUtility';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';

export default class __store__Effect {
    public static async request__model__(): Promise<__model__ResponseModel | HttpErrorResponseModel> {
        const endpoint: string = environment.api.__model__(camelCase);

        return EffectUtility.getToModel(__model__ResponseModel, endpoint);
    }
}
