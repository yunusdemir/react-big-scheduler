// updated version from https://github.com/StephenChou1017/react-big-scheduler/pull/217/commits/b31b614fcd93400d1318d8fc150010d7ece8c992#diff-5816c2eeb96142302fe0a7417bfb75abc26fcfd63a9093a39e71476be531d142

import * as React from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'


export default Component => {
    return props => (
        <DndProvider backend={HTML5Backend}>
            <Component {...props} />
        </DndProvider>
    )
}