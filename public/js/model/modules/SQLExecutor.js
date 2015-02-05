/**
 * Created by Lei on 2015/2/4.
 */
define(function(){

    var _$results = $("#results"),
        _$executor_text_list = $("#executor-text-list"),
        _identity = 0;

    function ResultGird(rows){
        var _len = rows.length,
            i = 0,
            _table_html_arr = [];
        if(_len > 0){
            _table_html_arr.push("<table class='table table-striped'>");
            _table_html_arr.push("<thead><tr>");
            var _first_row = rows[0];
            for(var key in _first_row){
                _table_html_arr.push("<th>"+ key +"</th>")
            }
            _table_html_arr.push("</tr></thead>");
            for(; i < _len; i++){
                var _row = rows[i];
                _table_html_arr.push("<tr>");
                for(var key in _row){
                    _table_html_arr.push("<td>"+ _row[key] +"</td>")
                }
                _table_html_arr.push("</tr>");
            }
            _table_html_arr.push("</table>");
            _$results.empty().html(_table_html_arr.join(""));
        }else{
            _$results.empty().text("No results.");
        }
    }

    var SQLExecutor = {
        tabs : ko.observableArray([
            {
                href : "#default-executor-tab",
                tab_name : "Default",
                active : true,
                remove : false
            }
        ]),
        tabsContent: ko.observableArray([
            {
                id : "default-executor-tab",
                content : "",
                active : true
            }
        ]),
        onAddTab: function(element, index, data){
            $(element).find(">a").tab("show");
            if(data.exec){
                SQLExecutor.exec();
            }
        },
        addTab: function(table_name, columns){
            var _i = _identity++,
                _id = table_name + "_executor_tab_" + _i,
                _name = table_name + " # " + _i;
            this.tabsContent.push({
                id : _id,
                content : "SELECT \n\t" + columns.join(",\n\t") + " \nFROM " + __database + "." + table_name + " WHERE ROWNUM<=20",
                active: false
            });
            this.tabs.push({
                href : "#" + _id,
                tab_name : _name,
                active: false,
                exec : true,
                remove : true
            });
        },
        exec : function(){
            $.post("/sql/exec", {
                sql : _$executor_text_list.find(">div.active textarea").val()
            },function(result){
                if(result.success){
                    if(result.data instanceof Array){
                        ResultGird(result.data);
                    }
                }else{
                    _$results.empty().text(result.msg);
                }

            })
        },
        onExecute : function(){
            this.SQLExecutor.exec();
        },
        onCloseTab : function(data, event){
            var _$li = $(event.target).parent(),
                _$content = $(_$li.find(">a").attr("href")),
                _active = _$li.hasClass("active"),
                _$prev = _$li.prev();
            _$li.remove();
            _$content.remove();
            if(_active){
                _$prev.find(">a").tab("show");
            }
        }
    };

    return SQLExecutor;
});