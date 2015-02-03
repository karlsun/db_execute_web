/**
 * Created by Lei on 2015/2/3.
 */
var assert = require("assert");
describe('DBHelper', function(){
    describe('#getTables', function(){
        it('should return tables information', function(done){
            var DBHelper = require('../services/DBHelper'),
                _promise = DBHelper.getTables();
            _promise.then(function(tables){
                done();
            }).catch(function(e){
                throw e;
            });
        })
    })
})