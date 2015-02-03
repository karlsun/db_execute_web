/**
 * Created by Lei on 2015/2/3.
 */
var _config = require('../config.json'),
    Oracle = require('strong-oracle')({}),
    Promise = require("bluebird");

var DBHelper = {
    getConn:function(){
        return new Promise(function(resolve, reject){
            Oracle.connect(_config.db, function(err, conn){
                if(err){
                    reject(err);
                }else{
                    resolve(conn);
                }
            })
        })
    },
    exec:function(sqlStr, params){
        return DBHelper.getConn().then(function(conn){
            return new Promise(function(resolve, reject){
                conn.execute(sqlStr, params || [], function(err, result){
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                    }
                });
            });
        });
    },
    getTables:function(){
        return DBHelper.exec("select TABLE_NAME from all_tables where OWNER=:1", [_config.db.database]).then(function(result){
            return result;
        });
    },
    getColumns:function(tableName){
        return DBHelper.exec("select COLUMN_NAME from dba_tab_columns where table_name=:1 and owner=:2", [
            tableName,
            _config.db.database
        ])
            .then(function(result){
                return result;
            });
    }
}

module.exports = DBHelper;