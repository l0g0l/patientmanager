import mongoose from 'mongoose'

const Schema = mongoose.Schema

const patientsSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    propietario: {
        type: String,
        trim: true
    },
    fecha: {
        type: String,
        trim: true
    },
    hora:{
        type: String,
        trim: true
    },
    sintomas:{
        type: String,
        trim: true
    }
})
//'Patient' es el nombre de la colección en la BBDD
export const Patient = mongoose.model('Patient', patientsSchema);