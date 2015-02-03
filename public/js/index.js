/**
 * Created by Lei on 2015/2/3.
 */
(function(){

    var _$editor_form = $("#editor-form");

    $("#table-list").on("click", "a.table_link", function(){
        $.get("/get_columns/" + $(this).attr("data-name"), function(result){
            if(result){
                var _len = result.length,
                    _columns = [];
                    i = 0;
                for(;i < _len; i++){
                    _columns.push(result[i].COLUMN_NAME);
                }
                _$editor_form.empty().html(_columns.join("<br />"));
            }else{
                _$editor_form.text("No Data.");
            }
        });
    });

})();