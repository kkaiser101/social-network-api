const router = require('express').Router();
const apiRoutes = require('/api/userRoutes.js');

router.use('/routes/api/userRoutes.js', apiRoutes);

module.exports = router; 