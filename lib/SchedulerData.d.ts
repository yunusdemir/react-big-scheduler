export default class SchedulerData {
    constructor(date?: string, viewType?: number, showAgenda?: boolean, isEventPerspective?: boolean, newConfig?: any, newBehaviors?: any, localeMoment?: any);
    resources: any[];
    events: any[];
    eventGroups: any[];
    eventGroupsAutoGenerated: boolean;
    viewType: number;
    cellUnit: number;
    showAgenda: boolean;
    isEventPerspective: boolean;
    resizing: boolean;
    scrollToSpecialMoment: boolean;
    documentWidth: number;
    localeMoment: any;
    config: any;
    behaviors: any;
    setLocaleMoment(localeMoment: any): void;
    setResources(resources: any): void;
    setEventGroupsAutoGenerated(autoGenerated: any): void;
    setEventGroups(eventGroups: any): void;
    setMinuteStep(minuteStep: any): void;
    setBesidesWidth(besidesWidth: any): void;
    getMinuteStepsInHour(): number;
    addResource(resource: any): void;
    addEventGroup(eventGroup: any): void;
    removeEventGroupById(eventGroupId: any): void;
    containsEventGroupId(eventGroupId: any): boolean;
    setEvents(events: any): void;
    setScrollToSpecialMoment(scrollToSpecialMoment: any): void;
    prev(): void;
    next(): void;
    setDate(date?: string): void;
    setViewType(viewType?: number, showAgenda?: boolean, isEventPerspective?: boolean): void;
    startDate: any;
    endDate: any;
    setSchedulerMaxHeight(newSchedulerMaxHeight: any): void;
    isSchedulerResponsive(): any;
    toggleExpandStatus(slotId: any): void;
    isResourceViewResponsive(): any;
    isContentViewResponsive(): any;
    getSchedulerWidth(): any;
    getResourceTableWidth(): any;
    getContentCellWidth(): any;
    getContentTableWidth(): number;
    getScrollToSpecialMoment(): boolean;
    getSlots(): any[];
    getSlotById(slotId: any): any;
    getResourceById(resourceId: any): any;
    getTableHeaderHeight(): any;
    getSchedulerContentDesiredHeight(): number;
    getCellMaxEvents(): any;
    getDateLabel(): any;
    addEvent(newEvent: any): void;
    updateEventStart(event: any, newStart: any): void;
    updateEventEnd(event: any, newEnd: any): void;
    moveEvent(event: any, newSlotId: any, newSlotName: any, newStart: any, newEnd: any): void;
    isEventInTimeWindow(eventStart: any, eventEnd: any, windowStart: any, windowEnd: any): boolean;
    removeEvent(event: any): void;
    removeEventById(eventId: any): void;
    getResourceTableConfigWidth(): any;
    getContentCellConfigWidth(): any;
    _setDocumentWidth(documentWidth: any): void;
    _detachEvent(event: any): void;
    _attachEvent(event: any): void;
    _handleRecurringEvents(): void;
    _resolveDate(num: any, date?: any): void;
    selectDate: any;
    _createHeaders(): void;
    headers: {
        time: any;
        nonWorkingTime: any;
    }[];
    _createInitHeaderEvents(header: any): {
        time: any;
        nonWorkingTime: any;
        start: any;
        end: any;
        count: number;
        addMore: number;
        addMoreIndex: number;
        events: any[];
    };
    _createHeaderEvent(render: any, span: any, eventItem: any): {
        render: any;
        span: any;
        eventItem: any;
    };
    _getEventSlotId(event: any): any;
    _getEventGroupId(event: any): any;
    _getEventGroupName(event: any): any;
    _generateEventGroups(): void;
    _createInitRenderData(isEventPerspective: any, eventGroups: any, resources: any, headers: any): any[];
    _getSpan(startTime: any, endTime: any, headers: any): number;
    _validateResource(resources: any): void;
    _validateEventGroups(eventGroups: any): void;
    _validateEvents(events: any): void;
    _validateMinuteStep(minuteStep: any): void;
    _compare(event1: any, event2: any): 1 | -1;
    _createRenderData(): void;
    renderData: any[];
    _startResizing(): void;
    _stopResizing(): void;
    _isResizing(): boolean;
}
