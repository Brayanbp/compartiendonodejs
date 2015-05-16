var os= require('os'),
platform= os.platform(),
hostname= os.hostname(),
arch= os.arch();

console.log("El sistema operativo es "+platform);
console.log("El nombre de la pc es "+hostname);
console.log("La arquitectura es "+arch);