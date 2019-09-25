module.exports = function(app)
{

    var Contact = app.models.Contact
    var Group = app.models.Group

    app.get('/contacts/name/:id', function(req, res) {
        Contact.findById({ where: {id: req.params.id},fields:{id:true,fname:true,lname:true}}, function(err, record){
          if (err) res.send(err);
          if (!err && record) {
              console.log("this is record",record)
            res.send(record);
          } else {
            res.send(404);
          }
        });
      });

      app.get('/group/:id', function(req, res) {
        Group.find({ where: {id: req.params.id},fields:{id:true,memebers:true,grouppic:true}}, function(err, record){
          if (err) res.send(err);
          if (!err && record) {
              console.log("this is record",record)
            res.send(record);
          } else {
            res.send(404);
          }
        });
      });
}