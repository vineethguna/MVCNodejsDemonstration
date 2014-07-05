//Imports
var mongoose = require('mongoose');


// create vars
var Schema = mongoose.Schema;
var Model = mongoose.model;

// checklist item schema
var checkListItemSchema = new Schema({
    name        :   String,
    priority    :   Number,
    isCompleted :   Boolean,
    whenToDo    :   Date,
    checkListID :   {type: Schema.Types.objectId, ref: 'checkListSchema'}
});

// checklist schema
var checkListSchema = new Schema({
    name         :    String,
    createdDate  :    Date,
    modifiedDate :    Date,
    noOfItems    :    Number,
    completed    :    Number,
    pending      :    Number
});

// checklist item schema model
exports.checkList = Model('checkList', checkListSchema);
exports.checkListItem = Model('checkListItem', checkListItemSchema);
