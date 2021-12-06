export default ResourceView;
declare class ResourceView extends React.Component<any, any, any> {
    static propTypes: {
        schedulerData: any;
        contentScrollbarHeight: any;
        slotClickedFunc: any;
        slotItemTemplateResolver: any;
        toggleExpandFunc: any;
    };
    constructor(props: any);
}

import React from "react";