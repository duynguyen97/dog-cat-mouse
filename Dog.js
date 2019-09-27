function Dog(){
	this.stomach=[];
}

Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
};

Dog.prototype.sleep = function(){
	console.log('Sleeping...');
};

module.exports = Dog;