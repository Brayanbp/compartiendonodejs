var path= require('path'),
routeDir= "/test/example.js";

console.log("Ruta: "+routeDir);
console.log("El nombre del archivo es "+path.basename(routeDir));
console.log("La extensión del archivo es "+path.extname(routeDir));
console.log("La carpeta donde se guardo el archivo es "+path.dirname(routeDir));