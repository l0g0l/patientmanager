import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axiosClient from '../config/axios'

//le tenemos que pasar props para poder utilizar el props.history.push() para redireccionar
const NewAppointment = (props) => {
    // console.log(props)

    //generamos los states para cada uno de los campos del formulario
    const [appointment, setAppointment] = useState({
        name: '',
        breed: '',
        owner: '',
        telephone: '',
        email: '',
        date: '',
        time: '',
        symptoms: ''
    })


    //leemos los datos del formulario
    const updateState = e => {
        //guardamos en el state ...appointment, esto es, lo que ya hubiera en el state, y le aádimos el target.name para saber a qué input donde el usuario está escribiendo y el target.value para recoger lo que escribe. Todo eso lo guardamos como un obj        
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }
    //validamos el formulario antes de enviarlo
    const validateForm = (e) => {
        e.preventDefault() //detenemos el formulario

        let name = document.getElementById('name').value;
        console.log(name)
        if (name.length === 0) {
            alert('You must complete name field');
            return;
        }

        let breed = document.getElementById('breed').value;
        if (breed.length === 0) {
            alert('You must complete breed field');
            return;
        }
        let owner = document.getElementById('owner').value;
        if (owner.length === 0) {
            alert('You must complete owner field');
            return;
        }
        let telephone = document.getElementById('telephone').value;
        if (telephone.length === 0) {
            alert('You must complete telephone field');
            return;
        }
        let email = document.getElementById('email').value;
        if (email === /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i) {
            alert('The email address is wrong');
            return;
        }
        let date = document.getElementById('date').value;
        if (date.length === 0) {
            alert('You must complete date field');
            return;
        }
        let symptoms = document.getElementById('symptoms').value;
        if (symptoms.length === 0) {
            alert('You must complete symptoms field');
            return;
        }
        createNewAppointment() //hasta que no se valide no hace la petición axios al back, por eso llamamos a la función dentro de la de validación
    }

    //enviamos una petición a la API
    const createNewAppointment = e => {


        //enviamos la petición por Axios. Como segundo parámetro le tienes que poner lo que quieres agregar, por tanto el state appointment
        axiosClient.post('/patients', appointment)
            .then(res => {
                console.log(res);

                props.setconsultAPI(true)//cambiamos de nuevo el state a true y como luego redirecciona a la ppal, a /, llega como true, entra en el if y consulta de nuevo la BBDD. Cuando redirecciona da un error de que history.push es undefined, esto es porque hemos perdido las props, podemos verlo en componments. para recuperarlas y que deje de fallar debemos importar withRouter y envolver el export default el nombre de la función con ello: export default withRouter(NewAppointment)

                //redireccionamos
                props.history.push('/')

            })
    }


    return (
        <Fragment>
            <h1 className="my-5">Create New Appointment</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={"/"} className="btn btn-success text-uppercase py-2 px-5 font-weigth-bold">Back</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <form onSubmit={validateForm} className="bg-white p-5 bordered" id="form">
                            <div className="form-group">
                                <label htmlFor="name">Pet Name</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="name"
                                    name="name"
                                    placeholder="Pet Name"
                                    onChange={updateState}

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="breed">Breed</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="breed"
                                    name="breed"
                                    placeholder="Breed"
                                    onChange={updateState}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="owner">Owner</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="owner"
                                    name="owner"
                                    placeholder="Pet Owner"
                                    onChange={updateState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telephone">Telephone Number</label>
                                <input
                                    type="number"
                                    className="form-control form-control-lg"
                                    id="telephone"
                                    name="telephone"
                                    placeholder="Telephone Number"
                                    onChange={updateState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={updateState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Date of Entry</label>
                                <input
                                    type="date"
                                    className="form-control form-control-lg"
                                    id="date"
                                    name="date"
                                    onChange={updateState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="time">Discharge time</label>
                                <input
                                    type="time"
                                    className="form-control form-control-lg"
                                    id="time"
                                    name="time"
                                    onChange={updateState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="symptoms">Symptoms</label>
                                <textarea
                                    className="form-control"
                                    name="symptoms"
                                    id="symptoms"
                                    rows="6"
                                    onChange={updateState}
                                ></textarea>
                            </div>


                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Create Appointment" />
                        </form>

                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default withRouter(NewAppointment);