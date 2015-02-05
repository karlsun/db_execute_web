/**
 * Created by Lei on 2015/2/5.
 */
define(function(){

    var _$form_container = $("#table-form"),
        _$results = $("#results");

    var TableForm = {
        cache : {
            cols : null
        },
        sp: ko.observable("N/A"),
        name : ko.observable("N/A"),
        columns : ko.observable([]),
        save: function(data, event){
            var _$inputs = _$form_container.find("input"),
                _form_val = [];
            $.each(_$inputs, function(index, ele){
                var _$ele = $(ele);
                _form_val.push({
                    name : _$ele.attr("name"),
                    val : _$ele.val()
                });
            });
            $.post("/save_form", { formVals : _form_val, table: TableForm.name(), sp: TableForm.sp()  }, function(result){
                if(result.success){
                    _$results.empty().text(result.data);
                    TableForm.setFormColumns(TableForm.name, TableForm.cache.cols);
                }else{
                    _$results.empty().text(result.msg);
                }
            });
        },
        setFormColumns : function(tableName, cols){
            if(cols && cols.length > 0){
                var _len = cols.length,
                    i = 0,
                    _columns = [];
                TableForm.cache.cols = cols;
                for(;i < _len; i++){
                    _columns.push({
                        name : cols[i]
                    });
                }
                TableForm.name(tableName);
                TableForm.columns(_columns);
            }
        },
        reset : function(elements){
            if(elements && elements.length > 2){
                $(elements[1]).find("input").focus();
            }
        }
    };

    return TableForm;
});