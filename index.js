(function() {
  //bringing in the express library for me to use
  //just like bringing in JQuery when we are in a browser
  let express = require("express");

  //app == whatever express returns
  let app = express();

  app.get('/', function(req, res) {
    res.send('<div>Hello World!</div>');
  })

  app.get('/api/pets', function(req, res) {

    res.send({

      "data": {
        "pets": [{
          "id": 1,
          "name": "Fluffy",
          "age": 5,
          "uri": "/api/pets/1"
        }, {
          "id": 2,
          "name": "Bob",
          "age": 6,
          "uri": "/api/pets/2"
        }]
      }
    });
  });

  app.get('/api/pets/1', function(req, res) {

    res.send({

      "id": 1,
      "name": "Fluffy",
      "age": 5,
      "uri": "/api/pets/1"

    });
  })
  app.get('/api/pets/2', function(req, res) {

    res.send({

      "id": 2,
      "name": "Bob",
      "age": 6,
      "uri": "/api/pets/2"

    });
  })


  app.listen(3000, function() {
    console.log("Example app listening on port 3000")
  })


})();
