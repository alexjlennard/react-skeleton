import WidgetStatusEnum from '../constants/WidgetStatusEnum';
import WidgetsAction from '../stores/widgets/WidgetsAction';

const errorWidgetMiddleware = () => (store) => (next) => (action) => {
    if (action.error) {
        const errorAction = action;

        next(WidgetsAction.add(errorAction.payload.message, WidgetStatusEnum.Error));
    }

    next(action);
};

export default errorWidgetMiddleware;
