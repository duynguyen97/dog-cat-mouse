var Cat = require('./Cat');
var Mouse = require('./Mouse');
var cat = new Cat('Tom');
var mouse = new Mouse('Jerry');
cat.eat(mouse);
mouse.die();
console.log(cat.stomach);