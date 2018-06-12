import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {Container} from 'semantic-ui-react';

import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import EventDetailedPage from '../../features/event/EventDetaild/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar/NavBar';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container className='main'>
          <Route exact path="/" component={HomePage}/>
          <Route path="/events" component={EventDashboard}/>
          <Route path="/event/:id" component={EventDetailedPage}/>
          <Route path="/people" component={PeopleDashboard}/>
          <Route path="/profile/:id" component={UserDetailedPage}/>
          <Route path="/settings" component={SettingDashboard}/>
          <Route path="/createEvent" component={EventForm}/>
        </Container>
      </div>
      
    );
  }
}

export default App;
