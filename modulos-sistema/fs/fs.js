var fs= require("fs"),
json={
	"index1": "value1",
	"index2": "value2"
};

fs.writeFile("files/test.json", JSON.stringify(json),function (err) {
	if (err){
		console.log(err);
	}else{
		console.log("se creó con éxito");
	}
});