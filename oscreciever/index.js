var { Server } = require('node-osc');
 
var oscServer = new Server(8080, '0.0.0.0');
 
oscServer.on('message', function (msg) {
  console.log(msg);
});
