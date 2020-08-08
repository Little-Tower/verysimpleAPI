import { v4 as uuidv4 } from 'uuid';

let users = [ ]

//view all users
export const getUsers = (req, res) => {
    res.send(users);
}

//Add new user
export const addUser = (req, res) => {
    const userNew = req.body;

    //Generación del id único del usuario.
    const userId = uuidv4();

    //Spread para el objeto usuario.
    const userWithId = {...userNew, id: userId}

    //Se puede simplificar en:
    //->    users.push({ ...userNew, id: uuidv4()});
    users.push(userWithId);

    res.send(`User ${userNew.firstName} - ${userNew.lastName} added to the database`);
}

//View an unique user
export const viewUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser)
}

//Delete an user
export const deleteUser = (req,res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);
}

//Edit an user
export const editUser = (req,res) => {
    const {id} = req.params;
    const { firstName, lastName, age} = req.body;

    const userToEdit = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User ${firstName} ${lastName} have been updated.`)
}