//actualmente  ya se pueden utilizar modulos e imports nativos de js. Hay que habilitarlo en el packaje.json con"type":"module"
import express from 'express'
import router from './routes/routes.js' // en la nueva versión con los imports, hay que colocar la extensión del archivo
import mongoose from 'mongoose'
import cors from 'cors'

//creo el servidor
const app = express()

//habilitar CORS
const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: (origin, callback) => {
        // console.log(origin);
        const existe = whitelist.some(dominio => dominio === origin)
        if (existe) {
            callback(null, true)
        } else {
            callback(new Error('Forbiden by CORS'))
        }

    }
}
// app.use(cors(corsOptions)) esta opción es la opción restrictiv de un dominio específico 
app.use(cors())



//conectar a mongodb
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//Definimos el puerto. Al hacer el deploy, el port será el que asgine el depliegue, porque no se sabe cual estará disponible, al estar en local, la variable .env.port no existe, por tanto correremos sonre el puerto 4000
const port = process.env.PORT || 4000
const host = process.env.HOST || '0.0.0.0'


//Agregar body-parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }))


//Agregar Router. El use soporta todos los verbos de express GET, POST, PATCH, PUT DELETE, de esta manera a la pag ppal, esta, agrega las rutas que hemos establecido en routes.js
app.use('/', router)


//definir puerto y arrancar servidor
app.listen(port, host, () => {
    console.log(`Server conenected in the port ${port}`);

})