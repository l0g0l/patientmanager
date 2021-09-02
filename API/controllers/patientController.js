//el controlador es el que le pasa los datos a la vista para que lo muestre

import { Patient } from '../models/Patient.js' // importamos el modelo que hemos definido en models


// Creamos un nuevo paciente
const newClient = async (req, res, next) => {
    console.log(req.body)

    //crear obj instanciando patient con datos de req.body
    const patient = new Patient(req.body) // este Patient es el modelo que nos importamos

    try {
        //TODO con el método save() añadimos a la BBDD
        await patient.save()
        res.json({ message: 'Patient successfully added' })

    } catch (e) {
        console.log(e)
        next()
    }

}

//obtenemos todos los pacientes
const getPatients = async (req, res, next) => {

    try {
        const allPatients = await Patient.find({})
        res.json(allPatients)


    } catch (e) {
        console.log(e)
        next()
    }
}

//obtener solo 1 paciente
const getOnePatient = async (req, res, next) => {

    try {

        const onePatient = await Patient.findOne(req.params.id) // este id es que hemos puesto en el router  /:id
        res.json(onePatient)

    }catch (e) {
        console.log(e)
    }
}

//actualizar un paciente
const updateOnePatient = async (req,res,next)=> {
    try{
        //le ponemos_id que es igual que como se llama en la colección de la BBDD
        //con req.body actualizo el registro con los nuevos datos
        //con llaves y new, le decimos que nos traiga el nuevo registro porque por default mongoose devolvería el antiguo registro
        const updatePatient = await Patient.findOneAndUpdate({_id: req.params.id}, 
            req.body, {
            new: true
        })
        res.json(updateOnePatient)

    }catch (e) {
        console.log(e)
        next()
    }
}

//eliminar un paciente
const deleteOnePatient = async (req, res, next) => {

    try {

        const deletePatient = await Patient.findOneAndDelete ({_id: req.params.id})
        res.json('The patient has been deleted')

    }catch (e) {
        console.log(e)
        next()
    }
 }



export {
    newClient,
    getPatients,
    getOnePatient,
    updateOnePatient,
    deleteOnePatient
}