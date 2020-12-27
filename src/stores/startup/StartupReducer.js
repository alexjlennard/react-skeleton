import StartupAction from './StartupAction';
import BaseReducer from '../../utilities/BaseReducer';

export default class StartupReducer extends BaseReducer {
    initialState = {
        width: '',
        height: 0,
        device_type: '',
        location: '',
    };

    [StartupAction.UPDATE_WINDOW_SIZE](state, action) {
        const dimensions = action.payload;
        return {
            ...state,
            width: dimensions.width,
            height: dimensions.height,
        };
    }

    [StartupAction.UPDATE_DEVICE_TYPE](state, action) {
        const deviceType = action.payload;
        return {
            ...state,
            device_type: deviceType,
        };
    }

    [StartupAction.UPDATE_LOCATION](state, action) {
        const location = action.payload;
        return {
            ...state,
            location: location,
        };
    }
}
