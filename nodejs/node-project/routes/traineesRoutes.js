const router = require('express').Router();

const TraineesController = require('../controllers/traineesController');

// http://localhost:4000/api/v1/trainees /readTrainees
router.get('/readTrainees', TraineesController.readTrainees);

router.get('/readSpecificTrainee', TraineesController.readSpecificTrainee);

router.post('/createTrainee', TraineesController.createTrainee);

router.put('/updateTrainee', TraineesController.updateTrainee);

router.delete('/deleteTrainee', TraineesController.deleteTrainee);

module.exports = router;