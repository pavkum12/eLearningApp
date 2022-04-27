const router = require('express').Router()
const controller = require('../controller/controller');
const auth = require('../middleware/auth')

console.log("in Router");
app.post('/register', controller.registerUser);
app.post('/login', controller.login);
app.post('/admin', controller.admin)
app.delete('/delete', auth, controller.delete);


module.exports = router;