//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
$("#findFactors").click(function() {
  $("#results1").html(findFactors($("#largeNumber").val()));
});
var students=getStudents(400);
var studentText="";
var rooms=assignRooms(50,students);
var roomText="";

students.forEach(function(student) {
  studentText+="<li>";
  studentText+= student[1][0];
  studentText+= " ";
  studentText+= student[0];
  studentText+=", ";
  studentText+= student[1][1] + ", ";
  if(student[2]) {
    studentText+="Smoker";
  } else {
    studentText+="Non-Smoker";
  }
  studentText+="</li>\n";
});
$("#students").append(studentText);
$("#rooms").append(roomText);

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
  var students=[];
  var firstnames=[
    ["Cindy", "F"],["Rebecca", "F"],["Deborah", "F"],["Kathy", "F"],["Sue", "F"],
    ["Lorna", "F"],["Beverly", "F"],["Rose", "F"],["Claire", "F"],["Kate", "F"],
    ["Allen", "M"],["Harry", "M"],["Hal", "M"],["Ron", "M"],["Jack", "M"],
    ["Fred", "M"],["Joseph", "M"],["John", "M"],["Mark", "M"],["Thomas", "M"]
  ];
  var lastnames=["Smith", "Jones", "Adams", "Rodriquez", "Carleton", "Douglas",
    "Edwards", "Freeman", "McGuire", "Green", "Hill", "Inez", "Kurtz", "Lowe",
    "Norwood", "O'Malley", "Petersen", "Stevens", "Thompson", "Valentine",
    "Underhill", "Baggins", "Potter", "Weasley", "Granger", "Lovelace"];
  var smoking=true;

  for(var i=0; i<x; i++) {
    var student=[];
    student.push(lastnames[getRandomInt(0,lastnames.length-1)]);
    student.push(firstnames[getRandomInt(0,firstnames.length-1)]); 
    student.push(smoking);
    smoking = !smoking;
    students.push(student);
  }
  return students;
}

function assignRooms(x) {
  return "<li>John Doe, M, Smoker</li>\n<li>Jane Doe, F, Non-Smoker</li>";
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
