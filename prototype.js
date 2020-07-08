//changing the prototype to a new object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
numLegs: 4,
eat: function() {
  console.log("nom nom");
},
describe: function() {
  console.log("The dog's name is " + this.name);
}
};