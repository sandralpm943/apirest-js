import express from 'express'
import { PORT, IP } from './config.js'
import userRoutes from './routes/users.routes.js'

const app = express();

app.use(userRoutes);

app.listen(PORT)
console.log(`Server on port http://${IP}:${PORT}`)