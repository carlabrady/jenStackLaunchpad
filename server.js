var express = require( 'express');
var path = require( 'path' );
var port = 3000;
var app = express();
var getCount = 0;

app.use( express.static( 'public' ) );

// spin up server
app.listen( port, function(){
  // server side logs show up in terminal
  console.log( 'server up on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  // this is the root url
  console.log( 'base URL hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
  getCount ++;
  console.log('GET count =', getCount);
}); // end base url

app.get('/glasses', function(req, res){
  console.log('get glasses');
  res.send('glasses are cooooool!');
  getCount ++;
  console.log('GET count =', getCount);
})

app.get('/waterBottles', function(req, res){
  console.log('get waterBottles');
  res.send('gatorade is better!');
  getCount ++;
  console.log('GET count =', getCount);
})