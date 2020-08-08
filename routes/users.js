import express from 'express';
import { getUsers, addUser, viewUser, deleteUser, editUser} from '../controllers/users.js';

const router = express.Router();

//Al llegar a este punto ya estamos en la ruta localhost/users.
//Si aquí añadimos /users, estamos creado una ruta que nunca 
//va a funcionar; localhost/users/users.
router.get('/', getUsers);

//Ruta para añadir usuarios.
router.post('/', addUser);

//Ruta para ver un usuario concreto.
//El : delante de id significa que acepta y espera cualquier ruta.
router.get('/:id', viewUser);

//Eliminar un usuario.
router.delete('/:id', deleteUser);

//Editar un usuario.
router.patch('/:id', editUser);

export default router;