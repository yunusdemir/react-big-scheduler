export default ResourceEvents;
declare class ResourceEvents extends Component<any, any, any> {
    static propTypes: {
        resourceEvents: any;
        schedulerData: any;
        dndSource: any;
        onSetAddMoreState: any;
        updateEventStart: any;
        updateEventEnd: any;
        moveEvent: any;
        movingEvent: any;
        conflictOccurred: any;
        subtitleGetter: any;
        eventItemClick: any;
        viewEventClick: any;
        viewEventText: any;
        viewEvent2Click: any;
        viewEvent2Text: any;
        newEvent: any;
        eventItemTemplateResolver: any;
    };
    constructor(props: any);
    initDrag: (ev: any) => void;
    doDrag: (ev: any) => void;
    stopDrag: (ev: any) => void;
    cancelDrag: (ev: any) => void;
    onAddMoreClick: (headerItem: any) => void;
    eventContainerRef: (element: any) => void;
    eventContainer: any;
}
import { Component } from "react";
