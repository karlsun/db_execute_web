/**
 * Created by Lei on 2015/2/4.
 */
define(function(){

    var _$results = $("#results"),
        _$execute_text = $("#execute-text");

    var SQLExecutor = {
        onExecute : function(){
            $.post("/sql/exec", {
                sql : _$execute_text.val()
            },function(result){
                if(result instanceof Array){
                    var _len = result.length,
                        i = 0,
                        _table_html_arr = [];
                    if(_len > 0){
                        _table_html_arr.push("<table class='table table-striped'>");
                        _table_html_arr.push("<thead><tr>");
                        var _first_row = result[0];
                        for(var key in _first_row){
                            _table_html_arr.push("<th>"+ key +"</th>")
                        }
                        _table_html_arr.push("</tr></thead>");
                        for(; i < _len; i++){
                            var _row = result[i];
                            _table_html_arr.push("<tr>");
                            for(var key in _row){
                                _table_html_arr.push("<td>"+ _row[key] +"</td>")
                            }
                            _table_html_arr.push("</tr>");
                        }
                        _table_html_arr.push("</table>");
                        _$results.empty().html(_table_html_arr.join(""));
                    }else{
                        _$results.text("No results.");
                    }
                }
            })
        }
    };

    return SQLExecutor;
});