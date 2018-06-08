import React, { Component } from 'react';
import EventListItem from './EventListItem';


class EventList extends Component{
    render(){
        const {events, onEventEdit} = this.props;
        return (
            <div>
                <h1>Event list</h1>
                {
                    events.map((e)=>{
                    return <EventListItem key={e.id} event={e} onEventEdit={onEventEdit}/>
                    })
                }
                
                
            </div>
        );
    }
}

export default EventList;