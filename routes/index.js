var express = require('express');
var router = express.Router();
var rushita =require("../controller/usercontroller");



/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 

router.post('/',rushita.insert)
router.get('/',rushita.get_data)
router.get('/update/:id',rushita.get_data_update);
router.post('/update/:id',rushita.update);
router.get('/delete/:id',rushita.delete);
router.post('/login',rushita.login);

module.exports = router;