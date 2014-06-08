//get requirejs for AMD 
var requirejs = require('requirejs');
//config require to include dependencies
requirejs.config({
	//the root directory
	baseUrl:__dirname,
	paths:{
		nodeRequire:require,
		
	}
	
});

requirejs(['jquery',
	'underscore',
	'backbone',
	'handlebars',
	'express',
	'groupme',
	'fs'
	
	],
	function($,_,Backbone,Handlebars,express,groupme,fs){
		var app = express(),
			sPort = 5005,
			Port = 5000,
			API = groupme.Stateless;
		var https = require('https');
		var http = require('http');
		var hskey = fs.readFileSync('config/leancollage-key.pem');
		var hscert = fs.readFileSync('config/leancollage-cert.pem');
		var options = {
			key: hskey,
			cert: hscert
		};



		//GroupMe API credentials	
		const ACCESS_TOKEN = 'cb81f630d17c0131bdb83ed8024e43bd';
		const CLIENT_ID = 'pC11Uy923cfFV6cGemZoPhvUNT7G36QHVM4RRALRSdSRTXOj';
		console.log(process.cwd());

		API.Users.me(ACCESS_TOKEN, function(err,ret) {
			if (!err) {
			    console.log("Your user id is", ret.id, "and your name is", ret.name);        
			}
		});

		app.use('/',express.static(__dirname +  '/app'));
		app.get('/',function (req,res){
			res.redirect('https://oauth.groupme.com/oauth/authorize?client_id=' + CLIENT_ID);
			console.log('REDIRECT: GROUPME AUTH');
		});
		app.get('/home',function (req,res){
			res.sendfile('app/index.html');
			console.log('GET: index.html');
		});

		https.createServer(options,app).listen(sPort, function (){
			console.log('listening on secure port:' + sPort);
		});
		http.createServer(app).listen(Port, function (){
			console.log('listening on regular port:' + Port);
		});

		
});