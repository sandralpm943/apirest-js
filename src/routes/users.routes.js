import {Router} from 'express';

import { 
    actualizarUsuario,
    eliminarUsuario,
    insertarUsuario,
    obtenerUsuarios,
    verUsuario } from '../controlers/users.controlers.js';

const router = Router();

//todos los usuarios
router.get('/users',obtenerUsuarios )
//usuarios por ID
router.get('/users/:id',verUsuario)
//Crear usuarios
router.post('/users', insertarUsuario)
//Eliminar usuarios
router.delete('/users/:id', eliminarUsuario);
//actualizar usuarios
router.put('/users/:id',actualizarUsuario);

export default router;