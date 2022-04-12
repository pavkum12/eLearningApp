const router = require('express').Router()
const controller = require('../controller/controller');
const auth = require('../middleware/auth')

router.get('/', controller.homePage);
router.post('/register', controller.registerUser);
router.post('/login', controller.login);
router.post('/adminlogin', controller.adminlogin);
router.delete('/delete', auth, controller.delete);

module.exports = router;
