//creating a private variable prevents properties within an objec from being modified externally
function Bird() {
    let weight = 15;
    
  this.getWeight = function(){
    return weight;
  }
  
  }
  