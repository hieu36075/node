var express = require('express')
var session = require('express-session');
const get_data_account = require('../model/getdatabyaccount');
var router = express.Router();

router.get('/', async function(req, res, next) {
    let session = req.session;
    shop_id = session.shop_id;
    // shopIdList = session.shopIdList;
    let [dataInDb, shopIdList] = await get_data_account(shop_id);
    res.render('admin', { title: 'ADMIN PAGES', data: dataInDb.rows, shopIdList: shopIdList.rows, products: null });
})

router.post('/', function(req, res, next) {
    res.render('login', { title: 'Login Page', message: 'Hieu' })
})




module.exports = router;