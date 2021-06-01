import React from "react";
import { render } from "react-dom";
import events from "./events";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const App = () => (
  <>
    {/* <div className="circle one"></div> */}
    {/* <div className="circle two"></div> */}
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        step={60}
        defaultDate={new Date(2021, 3, 1)}
      />
    </div>
  </>
);

export default App;
