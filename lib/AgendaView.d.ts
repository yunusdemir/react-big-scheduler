export default AgendaView;
declare class AgendaView extends React.Component<any, any, any> {
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

import React from "react";