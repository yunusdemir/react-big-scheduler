export default AgendaEventItem;
declare class AgendaEventItem extends Component<any, any, any> {
    static propTypes: {
        schedulerData: any;
        eventItem: any;
        isStart: any;
        isEnd: any;
        subtitleGetter: any;
        eventItemClick: any;
        viewEventClick: any;
        viewEventText: any;
        viewEvent2Click: any;
        viewEvent2Text: any;
        eventItemTemplateResolver: any;
    };
    constructor(props: any);
}
import { Component } from "react";
