import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Patients from './components/Patients'
import NewAppointment from './components/NewAppointment'
import AppointmentDetail from './components/AppointmentDetail'
import axiosClient from './config/axios'




function App() {


  const [appointments, setAppointments]= useState([])
  const [consultAPI, setconsultAPI]= useState(true) //está en true porque la primera vez quiero que consulte la API

  useEffect(() => {
   //si consultar es true, hacemos el axios a la BBDD
    if(consultAPI) {
      const consultAPI = () => {
        axiosClient.get('/patients')
        .then(res => {
          console.log(res.data);
          //guardamos en el State el resultado
          setAppointments(res.data)
          
          //cuando obtengamos la respuesta y la guardemos en el state, deshabilitamos la consulta a la API, estndo el false, el if deja de ejecutarse
          setconsultAPI(false)
        })
        .catch (error => {
          console.log(error);
          
        })
      }
      consultAPI()
  
    }
  }, [consultAPI]) //le añadimos la dependencia consultarAPI y con esto le decimos que, cada vez que cambie ese state, vuelva a ejecutar el useEffect, de esta forma, cuando estemos en newAppointment creadno una cita, le demos a enviar y nos redirecccione patient, ya veremos actualizada el listado de citas incluyendo la última que hayamos creado

  return (
    <Router>
      <Switch>
        {/* con esta forma de pasar el componente Patients, podemos pasarle aqui mismo, en el router, las props con toda la info del state */}
        <Route exact path="/" component={() => <Patients data={appointments} />} /> 
        <Route path="/new" component={() => <NewAppointment setconsultAPI = {setconsultAPI}/>} /> {/*le paso el state al componente para que, una vez genere una ueva cita, quiero pasarla a true, para eu al volver al comopenente NewAppoiment, esté en true y consulte de nuevo al BBDD (es lo que hace el if)*/}
        <Route path="/appointment/:id" render={(props) => {
          console.log(props) 

          //le hacemos un filter para obtener, de todas las citas, una por su id y se lo pasamos al componente
          const oneAppointment = appointments.filter(item => item._id === props.match.params.id)
          console.log(oneAppointment);
          
          return (

            <AppointmentDetail oneappointment={oneAppointment[0]} setconsultAPI= {setconsultAPI}/>//le pasamos la posición 0 porque nada más vamos a necesitar una cita a la vez
          )
          
        }} />


      </Switch>


    </Router>

  );
}

export default App;
