//using an object for lookup rather than using switch or if else statements
// Setup
function phoneticLookup(val) {
  var result = "";

  var lookup= {
     "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
     "delta":"Denver",
    "echo":"Easy",
    "foxtrot": "Frank"
      
  };
result = lookup[val];
  return result;
}

phoneticLookup("charlie");
