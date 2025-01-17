export const DATE_FORMAT: "YYYY-MM-DD";
export const DATETIME_FORMAT: "YYYY-MM-DD HH:mm:ss";
export default Scheduler;
import SchedulerData from "./SchedulerData";
import ViewTypes from "./ViewTypes";
import CellUnits from "./CellUnits";
import SummaryPos from "./SummaryPos";
import DnDSource from "./DnDSource";
import DnDContext from "./DnDContext";
import AddMorePopover from "./AddMorePopover";
import DemoData from "./DemoData";
import React from "react";

declare class Scheduler extends React.Component<any, any, any> {
    static propTypes: {
        schedulerData: any;
        prevClick: any;
        nextClick: any;
        onViewChange: any;
        onSelectDate: any;
        onSetAddMoreState: any;
        updateEventStart: any;
        updateEventEnd: any;
        moveEvent: any;
        movingEvent: any;
        leftCustomHeader: any;
        rightCustomHeader: any;
        newEvent: any;
        subtitleGetter: any;
        eventItemClick: any;
        viewEventClick: any;
        viewEventText: any;
        viewEvent2Click: any;
        viewEvent2Text: any;
        conflictOccurred: any;
        eventItemTemplateResolver: any;
        dndSources: any;
        slotClickedFunc: any;
        toggleExpandFunc: any;
        slotItemTemplateResolver: any;
        nonAgendaCellHeaderTemplateResolver: any;
        onScrollLeft: any;
        onScrollRight: any;
        onScrollTop: any;
        onScrollBottom: any;
    };
    constructor(props: any);
    currentArea: number;
    onWindowResize: (e: any) => void;
    resolveScrollbarSize: () => void;
    schedulerHeadRef: (element: any) => void;
    schedulerHead: any;
    onSchedulerHeadMouseOver: () => void;
    onSchedulerHeadMouseOut: () => void;
    onSchedulerHeadScroll: (proxy: any, event: any) => void;
    schedulerResourceRef: (element: any) => void;
    schedulerResource: any;
    onSchedulerResourceMouseOver: () => void;
    onSchedulerResourceMouseOut: () => void;
    onSchedulerResourceScroll: (proxy: any, event: any) => void;
    schedulerContentRef: (element: any) => void;
    schedulerContent: any;
    schedulerContentBgTableRef: (element: any) => void;
    schedulerContentBgTable: any;
    onSchedulerContentMouseOver: () => void;
    onSchedulerContentMouseOut: () => void;
    onSchedulerContentScroll: (proxy: any, event: any) => void;
    onViewChange: (e: any) => void;
    goNext: () => void;
    goBack: () => void;
    handleVisibleChange: (visible: any) => void;
    onSelect: (date: any) => void;
}

export { SchedulerData, ViewTypes, CellUnits, SummaryPos, DnDSource, DnDContext, AddMorePopover, DemoData };
