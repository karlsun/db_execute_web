/**
 * Created by Lei on 2015/2/4.
 */
define([
    './modules/SQLExecutor',
    './modules/TableTree',
    './modules/TableForm'
], function(SQLExecutor, TableTree, TableForm){
    function AppViewModel(){
        this.SQLExecutor = SQLExecutor;
        this.TableTree = TableTree;
        this.TableForm = TableForm;
    }

    return AppViewModel;
});