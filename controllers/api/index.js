const router = require('express').Router();
const memberRoutes = require('./memberRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/member', memberRoutes);
router.use('/blog', blogRoutes);

module.exports = router;
