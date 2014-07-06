//Imports
var mongoose = require('mongoose');


// create vars
var Schema = mongoose.Schema;

// checklist schema
var checkListSchema = new Schema({
    name         :    {type: String, unique: true},
    createdDate  :    {type: Date, default: Date.now},
    modifiedDate :    {type: Date, default: Date.now},
    noOfItems    :    {type: Number, default: 0},
    completed    :    {type: Number, default: 0},
    pending      :    {type: Number, default: 0}
});


// checklist item schema
var checkListItemSchema = new Schema({
    name        :   String,
    priority    :   {type: Number, default: 0},
    isCompleted :   {type: Boolean, default: false},
    whenToDo    :   Date,
    checkListID :   {type: Schema.Types.ObjectId, ref: 'checkList'}
});


checkListSchema.statics.getAll = function(callback){
  this.find({}, function(err, result){
      if(!err){
          var data = {'checklists': []};
          for(var i=0; i < result.length; i++){
              data['checklists'].push({'name': result[i].name, 'id': result[i]._id})
          }
          callback(data);
      }
      else{
          throw err;
      }
  });
};

checkListSchema.statics.getByID = function(id, callback){
  this.findById(id, function(err, result){
      if(!err){
          var data = {'name': result.name, 'id': result._id};
          callback(data);
      }
      else{
          throw err;
      }
  })
};


checkListSchema.statics.remove = function(id, callback){
    this.findById(id, function(err, result){
        if(!err){
            result.remove();
            var data = {'message': 'Checklist successfully removed'};
            callback(data);
        }
        else{
            throw err;
        }
    });
};

checkListSchema.methods.create = function(callback){
    this.save(function(err){
        if(!err){
            callback();
        }
        else{
            console.log('error in db');
            throw err;
        }
    });
};


// checklist item schema model
exports.checkListModel = mongoose.model('checkList', checkListSchema);
exports.checkListItemModel = mongoose.model('checkListItem', checkListItemSchema);
