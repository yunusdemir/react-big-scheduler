export function getSummary(schedulerData: any, headerEvents: any, slotId: any, slotName: any, headerStart: any, headerEnd: any): {
    text: string;
    color: string;
    fontSize: string;
};
export function getCustomDate(schedulerData: any, num: any, date?: any): {
    startDate: any;
    endDate: any;
    cellUnit: number;
};
export function getNonAgendaViewBodyCellBgColor(schedulerData: any, slotId: any, header: any): string;
export function getDateLabel(schedulerData: any, viewType: any, startDate: any, endDate: any): any;
export function getEventText(schedulerData: any, event: any): any;
export function getScrollSpecialMoment(schedulerData: any, startMoment: any, endMoment: any): any;
export function isNonWorkingTime(schedulerData: any, time: any): boolean;
declare namespace _default {
    export const getSummaryFunc: any;
    export const getCustomDateFunc: any;
    export const getNonAgendaViewBodyCellBgColorFunc: any;
    export { getScrollSpecialMoment as getScrollSpecialMomentFunc };
    export { getDateLabel as getDateLabelFunc };
    export { getEventText as getEventTextFunc };
    export { isNonWorkingTime as isNonWorkingTimeFunc };
}
export default _default;
