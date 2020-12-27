import { createSelector } from 'reselect';

export class PreparedFoodSelector {
    static updateWindowSize(height, width) {
        return models.map((model) => ({
            episode: model.number,
            name: model.name,
            image: model.image.medium,
        }));
    }
}

export const selectEpisodes = createSelector((state) => state.app, PreparedFoodSelector.updateWindowSize);
