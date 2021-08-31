import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Patients from './components/Patients'
import NewAppointment from './components/NewAppointment'
import Appointment from './components/Appointment'
import axiosClient from './config/axios'




function App() {


  const [appointments, setAppointments]= useState([])

  useEffect(() => {
   
    const consultAPI = () => {
      axiosClient.get('/patients')
      .then(res => {
        console.log(res.data);
        //guardamos en el State el resultado
        setAppointments(res.data)
        
      })
      .catch (error => {
        console.log(error);
        
      })
    }
    consultAPI()

  }, [])

  return (
    <Router>
      <Switch>
        {/* con esta forma de pasar el componente Patients, podemos pasarle aqui mismo, en el router, las props con toda la info del state */}
        <Route exact path="/" component={() => <Patients data={appointments}/>} /> 
        <Route path="/new" component={NewAppointment} />
        <Route path="/appointment/:id" component={Appointment} />


      </Switch>


    </Router>

  );
}

export default App;
