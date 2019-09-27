function Cat(){
	this.stomach=[];
}

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse); 
};

Cat.prototype.say = function (){
	console.log('meo meo');
};

module.exports = Cat;
