'use strict';

module.exports = function(Group) {

     // Register a 'grpname' remote method: /Groups/some-id/grpname
  Group.remoteMethod(
    'grpname',
    {
      http: {path: '/:id', verb: 'get'},
      accepts: {arg: 'id', type: 'string', required: true, http: { source: 'path' }},
      returns: {root: true, type: 'object'},
      description: 'Marks a Group as grpnameed.'
    });

  // the actual function called by the route to do the work
  Group.grpname = function(id, cb) {
    Group.findById(id, function(err, record){
        if(err) throw err
        console.log(record);

    })
  };
    
};
