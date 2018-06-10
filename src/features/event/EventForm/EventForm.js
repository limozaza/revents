import React, { Component } from 'react';

import {Segment, Form, Button} from 'semantic-ui-react';

const emptyEvent = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "",
}

class EventForm extends Component{


    state = {
        event:emptyEvent
    }

    componentDidMount(){
        if(this.props.selectedEvent !== null){
            this.setState({
                event: this.props.selectedEvent
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.selectedEvent !== this.props.selectedEvent){
            this.setState({
                event: nextProps.selectedEvent || emptyEvent
            });
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.createEvent(this.state.event)
    }
    onInputChange = (event) =>{
        const newEvent = this.state.event;
        newEvent[event.target.name] = event.target.value
        this.setState({
            event:newEvent
        })
    }
    render(){
        return (
            <Segment>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Field>
                        <label>Event Title</label>
                        <input name="title" placeholder="First Name" value={this.state.event.title} onChange={this.onInputChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input name="date" value={this.state.event.date} onChange={this.onInputChange} type="date" placeholder="Event Date" />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input name="city" value={this.state.event.city} onChange={this.onInputChange} placeholder="City event is taking place" />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input name="venue" value={this.state.event.venue} onChange={this.onInputChange} placeholder="Enter the Venue of the event" />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input name="hostedBy" value={this.state.event.hostedBy} onChange={this.onInputChange} placeholder="Enter the name of person hosting" />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button  type="button" onClick={this.props.handlerCancel}>Cancel</Button>
                </Form>
            </Segment>
        );
    }
}

export default EventForm;