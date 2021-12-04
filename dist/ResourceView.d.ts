export default ResourceView;
declare class ResourceView extends Component<any, any, any> {
    static propTypes: {
        schedulerData: any;
        contentScrollbarHeight: any;
        slotClickedFunc: any;
        slotItemTemplateResolver: any;
        toggleExpandFunc: any;
    };
    constructor(props: any);
}

import {Component} from "react";