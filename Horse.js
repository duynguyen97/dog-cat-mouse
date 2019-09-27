function Horse(){

}
Horse.prototype.run = function(){
	console.log("Running...");
}
Horse.prototype.fly = function(){
	console.log("Flying...");
}
module.exports = Horse;