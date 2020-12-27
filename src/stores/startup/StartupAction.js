import ActionUtility from '../../utilities/ActionUtility';

export default class StartupAction {
    static UPDATE_WINDOW_SIZE = 'StartupAction.UPDATE_WINDOW_SIZE';
    static UPDATE_DEVICE_TYPE = 'StartupAction.UPDATE_DEVICE_TYPE';

    static UPDATE_LOCATION = 'StartupAction.UPDATE_LOCATION';

    static updateWindowSize(dimensions) {
        return ActionUtility.createAction(StartupAction.UPDATE_WINDOW_SIZE, dimensions);
    }

    static updateDeviceType(deviceType) {
        return ActionUtility.createAction(StartupAction.UPDATE_DEVICE_TYPE, deviceType);
    }

    static updateLocation(location) {
        return ActionUtility.createAction(StartupAction.UPDATE_LOCATION, location);
    }
}
