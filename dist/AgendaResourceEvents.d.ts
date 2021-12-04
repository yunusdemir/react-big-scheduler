export default AgendaResourceEvents;
declare class AgendaResourceEvents extends Component<any, any, any> {
    static propTypes: {
        schedulerData: any;
        resourceEvents: any;
        subtitleGetter: any;
        eventItemClick: any;
        viewEventClick: any;
        viewEventText: any;
        viewEvent2Click: any;
        viewEvent2Text: any;
        slotClickedFunc: any;
        slotItemTemplateResolver: any;
    };
    constructor(props: any);
}
import { Component } from "react";
