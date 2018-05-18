import React from "react";
import List from "./List";
import Form from "./Form";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './app.css';
import { BackIcon, NextIcon } from 'react-bootstrap';
import CustomToolbar  from './CustomToolbar';


BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
const events = [
  {
    id: 13,
    title: 'Event 1',
    start: moment('2018-04-28'),
    end: moment('2018-04-30 23:59:59'),
    color: 'blue'
  },
  {
    id: 13,
    title: 'Event 1',
    start: moment('2018-05-19'),
    end: moment('2018-05-21 13:00:00'),
    color: 'blue'
  },
  {
    id: 14,
    title: 'Event 2',
    start: moment('2018-05-21'),
    end: moment('2018-05-23'),
    isAllDay: false,
    color: 'red'
  },
];

function getEventClass(event, start, end, isSelected) {
  return {
    style: {
      backgroundColor: event.color,
      borderRadius: "50px",
      textAlign: "center"
    }
  }
}

function getEventTitle(event) {
  return event.title + ' ' + '[^-^]'
}

function onSelectEvent(event) {
  console.log(event);
}

function onSelectSlot(slotInfo) {
  console.log(slotInfo);
}

function dayPropGetter(date) {
  if (date.getDate() === 7 || date.getDate() === 15) {
    return {
      style: {
        border: 'solid 3px #faa',
        backgroundColor: '#fec'
      }
    };
  }
  else {
    return {
      style: {
        textAlign: 'left',
        contentAlign: 'left'
      }
    }
  }
}

const components = {
  dateCellWrapper: ({value, range, children}) => {
    return children;
  },
  toolbar: CustomToolbar,
  month: {
    header: ({date, label, localizer, format, culture}) => {      
      return (
        <div>
        <div style={{textAlign: 'left'}}>{label}</div>
        </div>
      )
    },
    dateHeader: ({label, date, drilldownView, isOffRange, onDrillDown}) => {      
      return (
        <div>
        <div style={{textAlign: 'left'}}>{label}</div>
        </div>
      )
    },
    event: ({event, isAllDay, title}) => {
      return (
        <div style={{verticalAlign: 'text-bottom'
        }}>
        {title}
        </div>
      )
    }
  }
};

const App = () => ( 

  
  <div className="example">
    {/* <div className="row justify-content-md-center">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div> */}

    
    <div>
      <BigCalendar
        defaultDate={new Date()}
        defaultView='month'
        views={['month']}
        events={events}
        eventPropGetter={getEventClass}
        titleAccessor={getEventTitle}
        dayPropGetter={dayPropGetter}
        selectable
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        components={components} />
    </div>
  </div>
);

export default App;
