/**
 * Created by Lei on 2015/2/4.
 */
define(['./modules/SQLExecutor'], function(SQLExecutor){
    function AppViewModel(){
        this.SQLExecutor = SQLExecutor;
    }

    return AppViewModel;
});