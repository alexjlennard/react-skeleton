import { createSelector } from 'reselect';
import groupBy from 'lodash.groupby';

export class WidgetsSelector {
    static selectWidgets(widgets) {
        const seasons = groupBy(widgets, 'season');

        return Object.entries(seasons).map(([season, models]) => {
            return {
                title: `Season ${season}`,
                rows: WidgetsSelector._createTableRows(models),
            };
        });
    }

    static _createTableRows(models) {
        return models.map((model) => ({
            episode: model.number,
            name: model.name,
            image: model.image.medium,
        }));
    }
}

export const selectWidgets = createSelector((state) => state.widgets, WidgetsSelector.selectWidgets());
