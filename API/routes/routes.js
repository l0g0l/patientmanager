import express from 'express'
import {newClient, getPatients, getOnePatient, updateOnePatient, deleteOnePatient} from '../controllers/patientController.js'



const router = express.Router()

//agregamos nuevos pacientes y lo probamos con postman
router.post('/patients', newClient)

//obtenemos todos los pacientes 
router.get('/patients', getPatients)

//obtenemos solo un paciente
router.get('/patients/:id', getOnePatient)

//actualizar un paciente con un ID específico
router.put('/patients/:id', updateOnePatient)

//eliminar un paciente con un ID específico
router.delete('/patients/:id', deleteOnePatient)

export default router