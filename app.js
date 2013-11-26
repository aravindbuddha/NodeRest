var mysql = require('mysql'),
http = require("http"),
url = require("url"),
con="",rq="",rs="",
app={
	init:function(){
		this.startHTTP();
		this.startMySql();
	},
	startHTTP:function(){
		var base = this;
		http.createServer(function(req, res) {
			rq=req;rs=res;
			console.log(rq.headers.host);
  		rs.writeHead(200, {"Content-Type": "application/json"});
  		base.route(url.parse(rq.url).pathname);
  		rs.end();
		}).listen(8888);
	},
	startMySql:function(){
		con = mysql.createConnection({
  		host     : 'localhost',
  		user     : 'root',
  		password : '',
		});
		con.connect(function(err) {
		  if(err){
		  	console.log(err);
		  }
		  else{
		  	console.log("Connected to mysql");
		  	this.createDB();
		  }
		});
	},
	createDB:function(){
		CREATE DATABASE IF NOT EXISTS NodeRest
	},
	route:function(path){
		var base=this;
		if(path == "/user"){
			base.getUsers();
		}	
	},
	getUsers:function(){

	}
};
app.init();