var express  = require('express'),
    app = express(),
    port = 2000;

app.use('/', express.static(__dirname + '/'));

app.get('/debug', function(req, res){
  res.sendfile(__dirname + '/debug.html');
});

app.listen(port);

console.log('start express server. port : ' + port + '\n');
