import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Patients from './components/Patients'
import newAppointment from './components/newAppointment'
import Appointment from './components/Appointment'




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Patients} />
        <Route path="/new" component={newAppointment} />
        <Route path="/appointment/:id" component={Appointment} />


      </Switch>


    </Router>

  );
}

export default App;
