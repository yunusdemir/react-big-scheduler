import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Routes} from 'react-router'
import Basic from './Basic'
import Readonly from './Readonly'
import Locale from './Locale'
import Views from './Views'
import CustomHeader from './CustomHeader'
import CustomTableHeaders from './CustomTableHeaders'
import CustomEventStyle from './CustomEventStyle'
import AddResource from './AddResource'
import DragAndDrop from './DragAndDrop'
import Summary from './Summary'
import AddMore from './AddMore'
import OverlapCheck from './OverlapCheck'
import NoCrossSlotMove from './NoCrossSlotMove'
import FreezeFirstRow from './FreezeFirstRow'
import ResourceClickable from './ResourceClickable'
import HideWeekends from './HideWeekends'
import CustomTimeWindow from './CustomTimeWindow'
import InfiniteScroll from './InfiniteScroll'
import InfiniteScroll2 from './InfiniteScroll2'
import ComingSoon from './ComingSoon'
import CustomPopoverStyle from './CustomPopoverStyle'

render((
    <Router>
        <Routes>
            <Route exact path="/" element={<Basic />}/>
            <Route path="/readonly" element={<Readonly />}/>
            <Route path="/locale" element={<Locale />}/>
            <Route path="/views" element={<Views />}/>
            <Route path="/customheader" element={<CustomHeader />}/>
            <Route path="/customeventstyle" element={<CustomEventStyle />}/>
            <Route path="/addresource" element={<AddResource />}/>
            <Route path="/draganddrop" element={<DragAndDrop />}/>
            <Route path="/summary" element={<Summary />}/>
            <Route path="/addmore" element={<AddMore />}/>
            <Route path="/overlapcheck" element={<OverlapCheck />}/>
            <Route path="/nocrossslotmove" element={<NoCrossSlotMove />}/>
            <Route path="/freezefirstrow" element={<FreezeFirstRow />}/>
            <Route path="/resourceclickable" element={<ResourceClickable />}/>
            <Route path="/comingsoon" element={<ComingSoon />}/>
            <Route path="/customtableheaders" element={<CustomTableHeaders />}/>
            <Route path="/hideweekends" element={<HideWeekends />}/>
            <Route path="/customtimewindow" element={<CustomTimeWindow />}/>
            <Route path="/infinitescroll" element={<InfiniteScroll />}/>
            <Route path="/infinitescroll2" element={<InfiniteScroll2 />}/>
            <Route path="/custompopover" element={<CustomPopoverStyle />}/>
        </Routes>
    </Router>
), document.getElementById('root'))

