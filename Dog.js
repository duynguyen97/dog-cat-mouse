function Dog(){
	this.stomach=[];
}

Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
};

Dog.prototype.bite = function(){
	console.log('Gru gru...');
};
module.exports = Dog;
