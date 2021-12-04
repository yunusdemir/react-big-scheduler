export default EventItemPopover;
declare class EventItemPopover extends Component<any, any, any> {
    static propTypes: {
        schedulerData: any;
        eventItem: any;
        title: any;
        startTime: any;
        endTime: any;
        statusColor: any;
        subtitleGetter: any;
        viewEventClick: any;
        viewEventText: any;
        viewEvent2Click: any;
        viewEvent2Text: any;
        eventItemPopoverTemplateResolver: any;
    };
    constructor(props: any);
}
import { Component } from "react";
