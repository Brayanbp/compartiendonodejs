var http = require('http');

http.get("http://urbania.pe/",function(response){
	var body="",
		count= 0;
	response.on("data",function(data){
		body += data;
		count++;
	});
	response.on('end', function() {
		console.log(body);
		console.log(count);
	});
});