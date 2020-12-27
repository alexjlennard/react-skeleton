import { createSelector } from 'reselect';

export class StartupSelector {
    static updateWindowSize(dimensions) {
        return {
            width: dimensions.width,
            height: dimensions.height,
        };
    }
}

export const updateWindowSize = createSelector((state) => state.app, StartupSelector.updateWindowSize);
