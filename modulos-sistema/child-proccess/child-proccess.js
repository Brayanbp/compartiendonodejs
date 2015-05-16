var child = require('child_process'),
path= require('path'),
fs= require('fs'),
os= require('os'),
fnOcutarWindows= function(route){
	child.exec("ATTRIB -S -R +H "+route,function (err, stdout, stderr) {
		if (err) throw err;
		console.log("Se ocultó en Windows correctamente")
	});
},
fnOcultarArchivo= function(file){
	var ctnFile= fs.readFileSync(file),
	nameFile= path.basename(file),
	nameFileHidden= "."+nameFile,
	route= "hidden/"+nameFileHidden;
	fs.writeFileSync(route,ctnFile);
	if('win32' == os.platform()){
		fnOcutarWindows(route);
	}else{
		console.log("Se ocultó correctamente");
	}
};

fnOcultarArchivo("visible/process.json");