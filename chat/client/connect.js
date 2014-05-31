function Connection(ip,port){
	this.ip = ip || 'localhost';
	this.port = port || '8888';
	this.socket = new WebSocket('ws://' + this.ip + ':' + this.port);
	this.newConnection = function(){
		this.socket = new WebSocket('ws://' + this.ip + ':' + this.port);
	}
	this.testConnection = function(){
		this.socket.send(new Transmission("testConnection"));
	}
	this.testPulse = false;
	this.socket.onmessage = function(m){
		console.log(m.data);
	}
}

var USERNAME;
do {
	USERNAME = prompt("choose a username");
} while(USERNAME === undefined);

var IP, ipRegexp = /^(?:(?:2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)\.){3}(?:2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)$/;
if(location.hash.replace("#","").match(ipRegexp)) IP = location.hash.replace("#","");
else {
	IP = prompt("connect to ip");
	while(!IP.match(ipRegexp)) IP = prompt("invalid ip");
}

var Main = new Connection(IP,'8888');
//if(Main.testConnection()) Main.socket.send(new Transmission("userJoin", USERNAME));
initDisplay();