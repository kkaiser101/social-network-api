const router = require('express').Router();

const {
    getUser,
    getSingleUser,
} = require('../../controllers/userController.js');

router.route('/').get(getUser).post(getSingleUser);

router
  .route('/:userId')
  .get(getUser)
  .put(getSingleUser)

module.exports = router;