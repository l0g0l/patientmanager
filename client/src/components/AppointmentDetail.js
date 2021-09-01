import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axiosClient from '../config/axios'

//añado withRouter para tener las props por default y le añado props como parámtetro para poder acceder a history.push()
const AppointmentDetail = (props) => {
    console.log(props)

    //hacemos esto para que, estando en detalle de cita, si recargo la pagina, me lleva a la home y deja de salir el error de undefined name. Muy importante, poner un return null
    if (!props.oneappointment) {
        props.history.push('/')
        return null

    }

    //cuando elimino, redirecciona correctamente pero para ver que lo ha eliminado tengo que recargar. Para que esto no pase, utilizamos el state de setconsultAPI el cual guardaba true eso es que hacía la consulta a la BBDD y actualizaba los registros
    const deleteAppointment = async (id) => {
        // console.log(id);
    
        axiosClient.delete(`/patients/${id}`)
            .then(res => {
                props.setconsultAPI(true)
                props.history.push('/') 

            })
            .catch (e => {
                console.log(e);
                
            })

    }

    return (

        <Fragment>

            <h1 className="my-5">Patient Appointment: {props.oneappointment.name}</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={"/"} className="btn btn-success text-uppercase py-2 px-5 font-weigth-bold">Back</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{props.oneappointment.name} - {props.oneappointment.breed}</h3>
                                    <small className="fecha-alta">
                                        {props.oneappointment.date} - {props.oneappointment.time}
                                    </small>
                                </div>

                                <p className="mb-0">{props.oneappointment.symptoms}</p>

                                <div className="contacto py-3">
                                    <p>Owner: {props.oneappointment.owner}</p>
                                    <p>Telephone number: {props.oneappointment.telephone}</p>
                                    <p>Email: {props.oneappointment.email}</p>
                                </div>
                                <div>
                                    {/*al onClick no le puedo pasar directamente una función ya que se estaría ejecutando tdo el tiempo y nosotros solo queremos que se ejecutre cuando lo clicke el ususario, además, como estamos eliminando, hay que pasarle un id, por tanto hay que hacer un arrow function y pasar por parámetro el id*/}
                                    <button type="button"  className="delete" onClick={() => deleteAppointment(props.oneappointment._id)}>&#x1f5d1;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    );
}

export default withRouter(AppointmentDetail)