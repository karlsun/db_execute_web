/**
 * Created by Lei on 2015/2/3.
 */
var express = require('express');
var router = express.Router(),
    DBHelper = require('../services/DBHelper');

router.post('/exec', function(req, res){
    var _sql = req.body.sql;
    DBHelper.exec(_sql).then(function(results){
        res.json(results)
    });
});

module.exports = router;
