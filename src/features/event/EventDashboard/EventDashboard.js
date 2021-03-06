import React, { Component } from 'react';

import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

import {Grid, Button} from 'semantic-ui-react';

import cuid from 'cuid';


const eventsDashboard = [
    {
      id: '1',
      title: 'Trip to Tower of London',
      date: '2018-03-27',
      category: 'culture',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: "Tower of London, St Katharine's & Wapping, London",
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'Trip to Punch and Judy Pub',
      date: '2018-03-28',
      category: 'drinks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      attendees: [
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        }
      ]
    }
  ];



class EventDashboard extends Component{

  state = {
    events: eventsDashboard,
    isOpen: false,
    selectedEvent: null
  }
  handlerFormOpen = () =>{
    this.setState({
      isOpen: true,
      selectedEvent:null
    })
  }
  handlerCancel = () => {
    this.setState({
      isOpen: false
    })
  }
  handlerCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    const updateEvents = [...this.state.events, newEvent];
    this.setState({
      events: updateEvents,
      isOpen: false
    })
  }
  handlerOpenEvent = (eventToOpen) =>{
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  }
  handlerUpdateEvent = (updateEvent) => {
    this.setState({
      events: this.state.events.map(event=>{
        if(event.id===updateEvent.id){
          return Object.assign({}, updateEvent);
        }else{
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    });
  }
  handleDeleteEvent = (eventId) => {
    const updateEvents = this.state.events.filter(e=>e.id !== eventId);
    this.setState({
      events: updateEvents,
    })
  }
  render(){
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList 
                    events={this.state.events} 
                    onOpenEvent={(e)=>this.handlerOpenEvent(e)}
                    deleteEvent={(e)=>this.handleDeleteEvent(e)}
                    />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button positive content="Create Event" onClick={this.handlerFormOpen}/>
                    {
                      this.state.isOpen &&
                       <EventForm 
                       handlerCancel={this.handlerCancel}
                       createEvent={this.handlerCreateEvent}
                       selectedEvent={this.state.selectedEvent}
                       updateEvent={this.handlerUpdateEvent}
                       />
                    }
                    
                </Grid.Column>
            </Grid>
        );
    }
}

export default EventDashboard;