export default EventItem;
declare class EventItem extends React.Component<any, any, any> {
    static propTypes: {
        schedulerData: any;
        eventItem: any;
        isStart: any;
        isEnd: any;
        left: any;
        width: any;
        top: any;
        isInPopover: any;
        leftIndex: any;
        rightIndex: any;
        isDragging: any;
        connectDragSource: any;
        connectDragPreview: any;
        updateEventStart: any;
        updateEventEnd: any;
        moveEvent: any;
        subtitleGetter: any;
        eventItemClick: any;
        viewEventClick: any;
        viewEventText: any;
        viewEvent2Click: any;
        viewEvent2Text: any;
        conflictOccurred: any;
        eventItemTemplateResolver: any;
    };
    constructor(props: any);
    startResizer: HTMLDivElement;
    endResizer: HTMLDivElement;
    initStartDrag: (ev: any) => void;
    doStartDrag: (ev: any) => void;
    stopStartDrag: (ev: any) => void;
    cancelStartDrag: (ev: any) => void;
    initEndDrag: (ev: any) => void;
    doEndDrag: (ev: any) => void;
    stopEndDrag: (ev: any) => void;
    cancelEndDrag: (ev: any) => void;
    startResizable: (props: any) => boolean;
    endResizable: (props: any) => boolean;
    subscribeResizeEvent: (props: any) => void;
}

import React from "react";