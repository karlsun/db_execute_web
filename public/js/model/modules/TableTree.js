/**
 * Created by Lei on 2015/2/4.
 */
define(function(){

    function getColumns(tableName, cb){
        $.get("/get_columns/" + tableName, function(result){
            if(result){
                var _len = result.length,
                    _columns = [];
                i = 0;
                for(;i < _len; i++){
                    _columns.push(result[i].COLUMN_NAME);
                }
                cb(_columns);
            }
        });
    }

    var TableTree = {
        onClick : function(){

        },
        doExecute : function(data, event){
            var _tableName = $(event.target).attr("data-name");
            getColumns(_tableName, function(columns){
                data.SQLExecutor.addTab(_tableName, columns);
            });
        }
    };

    return TableTree;

});