const express = require('express');
const UserController = require('./controller/controllerUser');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/user', UserController.getUser);
app.post('/user', UserController.addNewUser);
app.put('/user/:id', UserController.updateExistingUser);
app.delete('/user/:id', UserController.removeUser);

app.listen(port, () => {
    console.log(`Bookstore MVC API running at http://localhost:${port}`);
});

module.exports = app;