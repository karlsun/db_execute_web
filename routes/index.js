/**
 * Created by Lei on 2015/2/3.
 */
var express = require('express');
var router = express.Router(),
    DBHelper = require('../services/DBHelper'),
    config = require('../config.json');

/* GET home page. */
router.get('/', function(req, res) {
    DBHelper.getTables().then(function(tables){
        res.render('index', {tables : tables, database : config.db.database});
    });
});

router.get('/get_columns/:table', function(req, res){
    DBHelper.getColumns(req.params.table).then(function(columns){
        res.json(columns);
    });
});

router.post('/save_form', function(req, res){
    var _form_val = req.body.formVals,
        _table = req.body.table,
        _sp = req.body.sp,
        _sql = "INSERT INFO " + _table,
        columns = [], values = [];
    if(_form_val && _form_val.length > 0){
        var _len = _form_val.length,
            i = 0;
        for(; i < _len; i++){
            var _item = _form_val[i];
            columns.push(_item.name);
            values.push("'" + _item.val + "'");
        }
        _sql += "[" + columns.join(",") + "]"
        _sql += " VALUE [" + values.join(",") + "];"
        if(_sp != "N/A" && _sp.length > 0){
            _sql += "exec " + _sp;
        }
        DBHelper.exec(_sql).then(function(result){
            res.json({
                success: true,
                data: result
            });
        }).catch(function(e){
            res.json({
                success : false,
                msg : e.message
            });
        });
    }
});

module.exports = router;
