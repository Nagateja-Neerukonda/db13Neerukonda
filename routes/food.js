var express = require('express');
const food_controlers= require('../controllers/food');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('food', { title: 'Search Results by food' });
// });
router.get('/', food_controlers.food_view_all_Page );
router.get('/detail', food_controlers.food_view_one_Page);
router.get('/create', food_controlers.food_create_Page);
router.get('/update', food_controlers.food_update_Page);
router.get('/delete', food_controlers.food_delete_Page);
module.exports = router;
