/**
 * Created by Lei on 2015/2/3.
 */
var express = require('express');
var router = express.Router(),
    DBHelper = require('../services/DBHelper');

router.post('/exec', function(req, res){
    var _sql = req.body.sql;
    DBHelper.exec(_sql).then(function(results){
        res.json({
            success: true,
            data : results
        })
    }).catch(function(e){
        res.json({
            success: false,
            msg : e.message
        })
    });
});

module.exports = router;
