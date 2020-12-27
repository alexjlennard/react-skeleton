import WidgetResponseModel from "./widget/WidgetResponseModel";

export default interface IWidgetsState {
  readonly widget: WidgetResponseModel | null;
}
