import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const newAppointment = () => {
    return (
        <Fragment>
            <h1 className="my-5">Create New Appointment</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={"/"} className="btn btn-success text-uppercase py-2 px-5 font-weigth-bold">Back</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <form className="bg-white p-5 bordered">
                            <div className="form-group">
                                <label htmlFor="name">Pet Name</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="name"
                                    name="name"
                                    placeholder="Pet Name"
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
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telephone">Telephone Number</label>
                                <input
                                    type="tel"
                                    className="form-control form-control-lg"
                                    id="telephone"
                                    name="telephone"
                                    placeholder="Telephone Number"
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
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Date of Entry</label>
                                <input
                                    type="date"
                                    className="form-control form-control-lg"
                                    id="date"
                                    name="date"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="time">Discharge time</label>
                                <input
                                    type="time"
                                    className="form-control form-control-lg"
                                    id="time"
                                    name="time"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="symptoms">Symptoms</label>
                                <textarea
                                    className="form-control"
                                    name="symptoms"
                                    rows="6"
                                ></textarea>
                            </div>


                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita" />
                        </form>

                    </div>
                </div>
            </div>



        </Fragment>




    );
}

export default newAppointment;