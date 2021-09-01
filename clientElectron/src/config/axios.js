//creamos un CLIENTE AXIOS:  la ventaja es que podemos tener una conexion base que apunta a un dominio especifico y una vez hagamos el deploy, solamente con cambiar un valor, todos los endpoints se actualizarán
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL

})


export default axiosClient