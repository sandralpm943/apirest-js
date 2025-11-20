import express from 'express'
import { PORT, IP } from './config.js'
import userRoutes from './routes/users.routes.js'
import morgan from 'morgan'

const app = express();

app.use(morgan('dev'));
//Para que podamos ver JSON en express o crud.
app.use(express.json());


//Para que funcionen las rutas 
app.use(userRoutes);

app.listen(PORT)
console.log(`Server on port http://${IP}:${PORT}`)