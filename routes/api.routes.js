var express = require('express');
var router = express.Router();
const userController = require('../controllers/api/user.controller');

// route get all
router.get('/users', userController.index);

//route get by id
router.get('/users/:id', userController.show);

//route create data
router.post('/users/', userController.store);

//route update data
router.put('/users/:id', userController.update);

//route delete
router.delete('/users/:id', userController.destroy);

module.exports = router;
