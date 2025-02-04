var express = require('express');
var router = express.Router();
var rushita =require("../controller/usercontroller");



/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

router.post('/',rushita.insert)
router.get('/',rushita.get_data)
module.exports = router;

