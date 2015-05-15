var http = require('http'),
fs= require('fs'),
fnSaveScrapping= function(content){
	fs.writeFile("files/urbania.html", content,function (err) {
		if (err){
			console.log(err);
		}else{
			console.log("Se guardó el html con éxito");
		}
	});
};

http.get("http://urbania.pe/",function(response){
	var body="",
		count= 0;
	response.on("data",function(data){
		body += data;
		count++;
	});
	response.on('end', function() {
		fnSaveScrapping(body);
		console.log("Recibió "+count+" paquetes de datos");
	});
});