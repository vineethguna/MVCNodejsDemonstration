var checkListModel = require('../models/checkList').checkListModel;

function checkList(details){
    this.id = details.id;
    this.name = details.name;
}

// Static method to get all checklists
checkList.getAllCheckLists = function(callback){
    checkListModel.getAll(callback);
};

checkList.prototype.getCheckList = function(callback){
    checkListModel.getByID(this.id, callback);
};

checkList.prototype.createCheckList = function(callback){
    var document = { name : this.name};
    var newCheckList = new checkListModel(document);
    newCheckList.create(callback);
};

checkList.prototype.deleteCheckList = function(callback){
    checkListModel.remove(this.id, callback);
};

module.exports = checkList;
