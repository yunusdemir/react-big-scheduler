export default class DnDSource {
    constructor(resolveDragObjFunc: any, DecoratedComponent: any, dndType?: string);
    resolveDragObjFunc: any;
    DecoratedComponent: any;
    dndType: string;
    dragSource: import("react-dnd").DndComponentClass<any, import("react-dnd").Omit<unknown, never>>;
    getDragSpec: () => {
        beginDrag: (props: any, monitor: any, component: any) => any;
        endDrag: (props: any, monitor: any, component: any) => void;
        canDrag: (props: any) => boolean;
    };
    getDragCollect: (connect: any, monitor: any) => {
        connectDragSource: any;
        isDragging: any;
        connectDragPreview: any;
    };
    getDragSource: () => import("react-dnd").DndComponentClass<any, import("react-dnd").Omit<unknown, never>>;
}
