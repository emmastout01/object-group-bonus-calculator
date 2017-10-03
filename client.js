var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];
console.log(employees);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

var Employee = function(name, employeeNumber, annualSalary, reviewRating) {
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.annualSalary = annualSalary;
  this.reviewRating = reviewRating;
  this.bonusPercentage = function() {
  var percentAfterNumber = 0;
  if (employeeNumber.length==4){
    percentAfterNumber = 0.05;
  }
  console.log('bonusPercentage');
  return percentAfterNumber;
  };
  this.totalCompensation = function() {
console.log('totalCompensation');
  };
  this.totalBonus = function (){
console.log('totalBonus');
  };

};
var testEmployee = new Employee ("Atticus", '24054','47000',3);
console.log(testEmployee.bonusPercentage());
/*
function updateEmployees(employeesToUpgrade) {
  var upgradedEmployees = [];
  for(i=0; i < employeesToUpgrade.length; i++);{
    var oldEmployee = employeesToUpgrade[i];
    var upgradedEmployee = new Employee (oldEmployee.name, oldEmployee.employeeNumber, oldEmployee.annualSalary, oldEmployee.reviewRating);
    upgradedEmployees.push(upgradedEmployee);
  }
  return upgradedEmployees;
}

console.log(updateEmployees(employees));
*/
