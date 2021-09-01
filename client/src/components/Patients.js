import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Patients = ({ data }) => {
    //si el arreglo de citas es 0, que retorne null, no muestre nada
    if (data.length === 0) {
        return null
    }

    return (
        <Fragment>
            <h1 className="my-5">Patient Appointment Generator</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={"/new"} className="btn btn-success text-uppercase py-2 px-5 font-weigth-bold">Add Appointment</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {data.map(item => (
                                <Link to={`/appointment/${item._id}`} key={item._id} href="" className="p-5 list-group-item list-group-item-action flex-column align-items-start">

                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3 className="mb-3">{item.name} - {item.breed}</h3>
                                        <small className="fecha-alta">
                                            {item.date} - {item.time}
                                        </small>
                                    </div>

                                    <p className="mb-0">{item.symptoms}</p>

                                    <div className="contacto py-3">
                                        <p>Owner: {item.owner}</p>
                                        <p>Telephone number: {item.telephone}</p>
                                        <p>Email: {item.email}</p>
                                    </div>

                                </Link>
                            ))}
                        </div>

                    </div>

                </div>


            </div>

        </Fragment>
    );
}

export default Patients;