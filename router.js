const router = require('express').Router();

router.get('/', (req, res) =>
    res.render('pages/index'));
router.get('/pages', (req, res) =>
    res.render('pages/pages'));
router.get('*', (req, res) =>
    res.render('pages/404'));

module.exports = router