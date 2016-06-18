//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
$("#findFactors").click(function() {
  $("#results1").html(findFactors($("#largeNumber").val()));
});
var students=getStudents(400);
var studentText="";
var rooms=assignRooms(50,students);
var roomText=rooms;

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
    ["Emma", "F"],["Olivia", "F"],["Sophia", "F"],["Ava", "F"],["Isabella", "F"],
    ["Harper", "F"],["Emily", "F"],["Charlotte", "F"],["Abigail", "F"],["Mia", "F"],
    ["Madison", "F"],["Amelia", "F"],["Elizabeth", "F"],["Evelyn", "F"],["Avery", "F"],
    ["Aubrey", "F"],["Victoria", "F"],["Grace", "F"],["Ella", "F"],["Chloe", "F"],
    ["Elijah", "M"],["Daniel", "M"],["Aiden", "M"],["Logan", "M"],["Matthew", "M"],
    ["Jayden", "M"],["Oliver", "M"],["David", "M"],["Jackson", "M"],["Lucas", "M"],
    ["Noah", "M"],["Liam", "M"],["Mason", "M"],["Jacob", "M"],["William", "M"],
    ["Ethan", "M"],["James", "M"],["Alexander", "M"],["Michael", "M"],["Benjamin", "M"],
    ["Allen", "M"],["Harry", "M"],["Hal", "M"],["Ron", "M"],["Jack", "M"],
    ["Fred", "M"],["Joseph", "M"],["John", "M"],["Mark", "M"],["Thomas", "M"]
  ];
  var lastnames=[
    "Li", "Lam", "Brown", "Roy", "Tremblay", "Lee", "Lowe", "Barnes",
    "Gagnon", "Wilson", "Perez", "Gonzalez", "Hernandez", "Garcia",
    "Martinez", "Diaz", "Fernandez", "Lopez", "Alvaraz", "Sanchez",
    "Ramirez", "Flores", "Johnson","Williams", "Miller", "Davis",
    "Anderson", "Taylor", "Thomas", "Moore", "Martin", "Jackson",
    "White", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Young",
    "Allen", "Wright", "King", "Scott", "Baker", "Nelson", "Campbell",
    "Mitchell", "Roberts", "Carter", "Phillips", "Evans", "Turner",
    "Torres", "Parker", "Collins", "Stewart", "Morris", "Nguyen",
    "Murphy", "Rivera", "Cook", "Rogers", "Morgan", "Peterson",
    "Cooper", "Reed", "Bailey", "Bell", "Gomez", "Kelly", "Howard",
    "Ward", "Cox", "Richardson", "Wood", "Watson", "Brooks", "Bennett",
    "Gray", "James", "Reyes", "Cruz", "Hughes", "Price", "Myers",
    "Long", "Foster", "Sanders", "Ross", "Morales", "Powell", "Sullivan",
    "Russell", "Ortiz", "Jenkins", "Gutierrez", "Perry", "Butler",
    "Smith", "Jones", "Adams", "Rodriquez", "Carleton", "Douglas",
    "Edwards", "Freeman", "McGuire", "Green", "Hill", "Inez", "Kurtz",
    "Norwood", "Petersen", "Stevens", "Thompson", "Valentine", "Fisher",
    "Underhill", "Baggins", "Potter", "Weasley", "Granger", "Lovelace"
  ];

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

function assignRooms(x, students) {
  var roomAssignments="";
  var nonsmokingWomen=[];
  var smokingWomen=[];
  var nonsmokingMen=[];
  var smokingMen=[];

  students.forEach(function(student) {
    if(student[2]) {
      if(student[1][1]==="F") {
        smokingWomen.push(student);
      } else {
        smokingMen.push(student);
      }
    } else {
      if(student[1][1]==="F") {
        nonsmokingWomen.push(student);
      } else {
        nonsmokingMen.push(student);
      }
    }
  });
  //we are giving the rooms half to men and half to women who don't smoke
  //in the order they applied
  //because women can sue us for discrimination, but not smokers...
    for(var i=0; i<x; i+=2) {
      roomAssignments+="<li>";
      roomAssignments+=nonsmokingMen[i][1][0] + " ";
      roomAssignments+=nonsmokingMen[i][0] + ", ";
      roomAssignments+=nonsmokingMen[i][1][1] + ", ";
      if(nonsmokingMen[i][2]) {
        roomAssignments+="smoker";
      } else {
        roomAssignments+="non-smoker";
      }
      roomAssignments+= ", <br>";
      roomAssignments+=nonsmokingMen[i+1][1][0] + " ";
      roomAssignments+=nonsmokingMen[i+1][0] + ", ";
      roomAssignments+=nonsmokingMen[i+1][1][1] + ", ";
      if(nonsmokingMen[i+1][2]) {
        roomAssignments+="smoker";
      } else {
        roomAssignments+="non-smoker";
      }
      roomAssignments+="</li><li>";
      roomAssignments+=nonsmokingWomen[i][1][0] + " ";
      roomAssignments+=nonsmokingWomen[i][0] + ", ";
      roomAssignments+=nonsmokingWomen[i][1][1] + ", ";
      if(nonsmokingWomen[i][2]) {
        roomAssignments+="smoker";
      } else {
        roomAssignments+="non-smoker";
      }
      roomAssignments+= ", <br>";
      roomAssignments+=nonsmokingWomen[i+1][1][0] + " ";
      roomAssignments+=nonsmokingWomen[i+1][0] + ", ";
      roomAssignments+=nonsmokingWomen[i+1][1][1] + ", ";
      if(nonsmokingWomen[i+1][2]) {
        roomAssignments+="smoker";
      } else {
        roomAssignments+="non-smoker";
      }
      roomAssignments+="</li>";
    }
    return roomAssignments;
//  } else {
//    return "<li>John Doe, M, Smoker</li>\n<li>Jane Doe, F, Non-Smoker</li>";
//  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
