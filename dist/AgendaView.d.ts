export default AgendaView;
declare class AgendaView extends Component<any, any, any> {
    static propTypes: {
        schedulerData: any;
        subtitleGetter: any;
        eventItemClick: any;
        viewEventClick: any;
        viewEventText: any;
        viewEvent2Click: any;
        viewEvent2Text: any;
        slotClickedFunc: any;
    };
    constructor(props: any);
}
import { Component } from "react";
