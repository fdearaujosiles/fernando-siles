const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

router.get('/', (req, res) =>
    res.render('pages/index'));
router.get('/pages', (req, res) =>
    res.render('pages/pages'));
router.get('*', (req, res) =>
    res.render('pages/404'));


app.use('/', router);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
