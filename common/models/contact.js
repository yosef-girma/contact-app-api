'use strict';

module.exports = function(Contact) {


  Contact.remoteMethod(
    'addFav',
    {
      http: {path: '/favourite/update/:id', verb: 'put'},
      accepts: {arg: 'id', type: 'string', required: true, http: { source: 'path' }},
      returns: {root: true, type: 'object'},
      description: 'Add contact to favourite.'
    });

    Contact.addFav = function(id, cb) {
      Contact.findById(id, function(err, record){
        console.log("inside fav update",record);
        record.updateAttributes({isFavourite:!record.isFavourite}, function(err, instance) {
          if (err) cb(err);
          if (!err) cb(null, instance);
        })
      })
    };


    Contact.remoteMethod(
      'favourites',
      {
        http: {path: '/favourites', verb: 'get'},
        returns: {arg:'favourites', type: 'object'},
        description: 'Fetch favourites.'
      });
  
      Contact.favourites = function( cb) {
        Contact.find({where:{isFavourite:true},fields:{id:true,fname:true,lname:true,email:true,phoneno:true}}, function(err, record){
          console.log("inside fav update",record);
          if(err) throw err
            
          cb(null,record)
          
        })
      };
























    Contact.greet =async  function(message) {
        
       // cb(null, 'Greetings... ' + message);
       // promise based without using callback remove cb from method parameter and async to the method signature
       
       return 'Greeeting' + message
    
    }
  
    Contact.remoteMethod('greet', {
        http: {path: '/greet/:message', verb: 'get'}, 
            accepts: {arg: 'message', type: 'string',required:true,http:{source :'path'}},
            returns: {arg: 'greeting', type: 'string'}
      });

      Contact.staticRemote = async function(message)
      {
          return 'This is static remote method definede inside model definition json file'+message
      }

        // Register a 'grpname' remote method: /Contacts/some-id/grpname
  Contact.remoteMethod(
    'contact',
    {
      http: {path: '/test/:id', verb: 'get'},
      accepts: {arg: 'id', type: 'string', required: true, http: { source: 'path' }},
      returns: {root: true, type: 'object'},
      description: 'Marks a Contact as grpnameed.'
    });

  // the actual function called by the route to do the work
  Contact.contact = function(id, cb) {
    Contact.findById(id, function(err, record){
        if(err) cb(err)
        else { 
            cb(null,record)
            console.log(record);

        
      
        }


    })};
    
};
