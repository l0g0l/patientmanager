import mongoose from 'mongoose'

const Schema = mongoose.Schema

const patientsSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    breed: {
        type: String,
        trim: true
    },
    owner: {
        type: String,
        trim: true
    },
    telephone: {
        type: Number,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    date: {
        type: String,
        trim: true
    },
    time:{
        type: String,
        trim: true
    },
    symptoms:{
        type: String,
        trim: true
    }
})
//'Patient' es el nombre de la colección en la BBDD
export const Patient = mongoose.model('Patient', patientsSchema);