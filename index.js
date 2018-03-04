var app = require('express')();
var http = require('http').Server(app);
var hbs = require('hbs');
var fs = require('fs');
app.set('view engine','html');
app.engine('html', hbs.__express);

app.get('/',function(req,res) {
	var messages = JSON.parse(fs.readFileSync('messages.json','utf8'));
	res.render(__dirname + '/index.html', {'welcomeMessage': 'Hello Starterhacks','messages': messages});

});
app.get('/message', function(req,res) {
	console.log(req.query);
	var messages = JSON.parse(fs.readFileSync('messages.json','utf8'));
	messages.push(req.query);
	fs.writeFileSync('messages.json', JSON.stringify(messages));
})
http.listen(3000, function() {
	console.log("listening on port 3000")
})