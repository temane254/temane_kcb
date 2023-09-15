const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});


router.post('/notifyPayment', controllers.notifyBiller);
router.post('/billQuery', controllers.billQuery);

module.exports = router;
