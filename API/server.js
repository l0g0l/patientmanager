//actualmente  ya se pueden utilizar modulos e imports nativos de js. Hay que habilitarlo en el packaje.json con"type":"module"
import express from 'express'
import router from './routes/routes.js' // en la nueva versión con los imports, hay que colocar la extensión del archivo
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

const __dirname = path.resolve();

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
const atlasUrl = process.env.DB_MONGO;
const url = atlasUrl
mongoose.Promise = global.Promise
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(mongoose => console.log('Conected BBDD')) 
.catch(e => {console.log(e)})


//Definimos el puerto. Al hacer el deploy, el port será el que asgine el depliegue, porque no se sabe cual estará disponible, al estar en local, la variable .env.port no existe, por tanto correremos sonre el puerto 4000
const port = process.env.PORT || 4000
const host = process.env.HOST || '0.0.0.0'


//Agregar body-parser para leer los datos del formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'));


//Agregar Router. El use soporta todos los verbos de express GET, POST, PATCH, PUT DELETE, de esta manera a la pag ppal, esta, agrega las rutas que hemos establecido en routes.js
app.use('/', router)

//Definir la carpeta public. // Servir los archivos estáticos de la aplicación React.En tripu path.resolve
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
});


//definir puerto y arrancar servidor
app.listen(port, host, () => {
    console.log(`Server conenected in the port ${port}`);

})