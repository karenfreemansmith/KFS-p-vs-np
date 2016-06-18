//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
$("#findFactors").click(function() {
  $("#results1").html(findFactors($("#largeNumber").val()));
});
var students=getStudents(400);
var rooms=assignRooms(50,students);

$("#students").append(students);
$("#rooms").append(rooms);

function findFactors(x) {
  var factors="";
  for(var i=2; i<x; i++) {
    if(x%i===0) {
      factors+=i.toString() + " * ";
      factors+=(x/i).toString() + " = " + x + ".";
      break; //because we only need one solution, right?
      // if not we could push this string into an array of possible answers and keep going...
    }
  }
  if(factors==="") {
    factors = x + " is a prime number. <br>Only solution is: 1 * " + x + ".";
  }
  return factors;
}

function getStudents(x) {
  return "<li>John Doe, M, Smoker</li>\n<li>Jane Doe, F, Non-Smoker</li>";
}

function assignRooms(x) {
  return "<li>John Doe, M, Smoker</li>\n<li>Jane Doe, F, Non-Smoker</li>";
}
