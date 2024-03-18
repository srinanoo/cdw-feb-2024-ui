const router = require('express').Router();

const AddRoutes = require('../controllers/addController');

router.post('/trainees', AddRoutes.trainee);
router.post('/trainers', AddRoutes.trainer);
router.post('/batches', AddRoutes.batches);

module.exports = router;