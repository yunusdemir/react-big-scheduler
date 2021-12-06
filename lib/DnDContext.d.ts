export default class DnDContext {
    constructor(sources: any, DecoratedComponent: any);
    sourceMap: Map<any, any>;
    DecoratedComponent: any;
    getDropSpec: () => {
        drop: (props: any, monitor: any, component: any) => {
            slotId: any;
            slotName: any;
            start: any;
            end: any;
            initialStart: any;
            initialEnd: any;
        };
        hover: (props: any, monitor: any, component: any) => void;
        canDrop: (props: any, monitor: any) => boolean;
    };
    getDropCollect: (connect: any, monitor: any) => {
        connectDropTarget: any;
        isOver: any;
    };
    getDropTarget: () => import("react-dnd").DndComponentClass<any, import("react-dnd").Omit<unknown, never>>;
    getDndSource: (dndType?: string) => any;
}
