function Horse(){

}

Horse.prototype.run = function(){
	console.log("Running...");
}

Horse.prototype.sleep = function(){
	console.log("Sleeping...");
}

module.exports = Horse;