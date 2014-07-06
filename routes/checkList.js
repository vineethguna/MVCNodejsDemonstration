var express = require('express');
var router = express.Router();
var checkList = require('../logic/checkList');
var checkListItem = require('../logic/checkListItem');

/* GET / */
router.get('/', function(req, res){
    /*
        GET all checklists created
    */
    checkList.getAllCheckLists(function(data){
        return res.json(200, data);
    });
});


/* GET /:checkListID */
router.get('/:checkListID', function(req, res){
    var checkListObj = new checkList({id: req.params.checkListID});
    checkListObj.getCheckList(function(data){
        return res.json(200, data);
    });
});


/* POST / */
router.post('/', function(req, res){
    var checkListObj = new checkList({name : req.body.name});
    checkListObj.createCheckList(function(){
        var responseData = {message: ''};
        responseData.message = 'check list creation successful';
        return res.send(200, responseData);
    });
});


/* PUT /:checkListID */
router.put('/:checkListID', function(req, res){

});


/* PATCH /:checkListID */
router.patch('/:checkListID', function(req, res){
    console.log('testing patch')
});


/* DELETE /:checkListID */
router.delete('/:checkListID', function(req, res){
    var checkListObj = new checkList({id: req.params.checkListID});
    checkListObj.deleteCheckList(function(data){
        return res.json(200, data);
    })
});


/* GET /:checkListID/items/ */
router.get('/:checkListID/items/', function(req, res){

});


/* POST /:checkListID/items/ */
router.post('/:checkListID/items/', function(req, res){

});


/* PUT /:checkListID/items/:itemID/ */
router.put('/:checkListID/items/:itemID/', function(req, res){

});


/* PATCH /:checkListID/items/:itemID/ */
router.patch('/:checkListID/items/:itemID/', function(req, res){

});


/* DELETE /:checkListID/items/:itemID/ */
router.delete('/:checkListID/items/:itemID/', function(req, res){

});


// export router
module.exports = router;