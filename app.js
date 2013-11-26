var 
http = require("http"),
url = require("url"),
rq="",
rs="",
app={
	init:function(){
		this.startServer();
	},
	startServer:function(){
		var base = this;
		http.createServer(function(req, res) {
			rq=req;rs=res;
  		rs.writeHead(200, {"Content-Type": "application/json"});
  		base.route(url.parse(rq.url).pathname);
  		rs.end();
		}).listen(8888);
	},
	route:function(path){
		rs.write(path);
	}
};
app.init();