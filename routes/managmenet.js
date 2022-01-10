const router = require('express').Router();
const ManagController = require('../controllers/Management');
// find all tasks
router.get('/', ManagController.index);

// create a new task
router.post('/create', ManagController.create);

// update a task
router.get('/update/:id', ManagController.edit);
router.put('/update/:id', ManagController.update);

// delete a task
router.delete('/delete/:id', ManagController.delete);

module.exports = router;