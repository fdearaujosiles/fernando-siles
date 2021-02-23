const router = require('express').Router();

router.route('/')
    .get((req, res) => res.render('pages/index'));

router.route('/pages')
    .get( (req, res) => res.render('pages/pages'))
    .post((req, res) => res.json(JSON.parse(`
        [
            {title: "Home", url: "/"},
            {title: "Pages", url: "/pages"},
            {title: "404", url: "*"},
        ]
    `)))

router.get('*', (req, res) => res.render('pages/404'));

module.exports = router