//  OpenShift sample Node application
var express = require('express'),
    fs      = require('fs'),
    app     = express(),
    eps     = require('ejs'),
    stomp   = require('stomp-client'),
    morgan  = require('morgan');

var destination = '/queue/OANDA.TICK';
//var client = new stomp('broker-amq-stomp', 61313, 'user', 'password');
//client.connect(function(sessionId) {
//    client.subscribe(destination, function(body, headers) {
//	console.log('This is the body of a message on the subscribed queue:', body);
//    });
//});

Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {
  res.render('fx.html', { pageCountMessage : null});
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
