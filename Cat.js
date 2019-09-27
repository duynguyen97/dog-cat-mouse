function Cat(){
	this.stomach=[];
}

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse); 
};

Cat.prototype.talk = function(){
	console.log('meo meo');
};

Cat.prototype.dance = function(){
	console.log('I can dance');
};

module.exports = Cat;
