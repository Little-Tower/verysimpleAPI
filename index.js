import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());

//Ruta de inicio para el resto de direcciones en la API
//Cuando se hace una petición a /users, se ejecuta el código 
//que está vinculado a user.js
app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});