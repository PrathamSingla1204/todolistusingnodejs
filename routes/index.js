const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('Router Loaded');

router.get('/', homeController.home);
router.post('/add-task', homeController.addtask);
router.get('/delete-task', homeController.deletetask);


module.exports = router;