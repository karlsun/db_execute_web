/**
 * Created by Lei on 2015/2/4.
 */
define([
    './modules/SQLExecutor',
    './modules/TableTree'
], function(SQLExecutor, TableTree){
    function AppViewModel(){
        this.SQLExecutor = SQLExecutor;
        this.TableTree = TableTree;
    }

    return AppViewModel;
});