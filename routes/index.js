/**
 * Created by Lei on 2015/2/3.
 */
var express = require('express');
var router = express.Router(),
    DBHelper = require('../services/DBHelper');

/* GET home page. */
router.get('/', function(req, res) {
    DBHelper.getTables().then(function(tables){
        res.render('index', {tables : tables});
    });
});

router.get('/get_columns/:table', function(req, res){
    DBHelper.getColumns(req.params.table).then(function(columns){
        res.json(columns);
    });
});

module.exports = router;
