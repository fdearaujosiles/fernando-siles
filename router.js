const router = require('express').Router();

router.route('/')
    .get((req, res) => res.render('pages/index'));

router.route('/pages')
    .get( (req, res) => res.render('pages/devchallenges-teampage'));

router.get('*', (req, res) => res.render('pages/404'));

module.exports = router