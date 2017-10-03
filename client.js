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
  else {
    percentAfterNumber = 0;
  }
  var percentAfterRatings;
  if (reviewRating <= 2) {
    percentAfterRatings = percentAfterNumber;
  }

  else if (reviewRating === 3){
    percentAfterRatings = percentAfterNumber + 0.04;
  }
  else if (reviewRating === 4){
    percentAfterRatings = percentAfterNumber + 0.06;
  }
  else if (reviewRating === 5){
    percentAfterRatings = percentAfterNumber + 0.10;
    }
    else {
      console.log('Not a thing');
    }
  var percentAfterSalary;
  var Salary = parseInt(annualSalary);
  if (Salary > 65000){
    percentAfterSalary = percentAfterRatings - 0.01;
  }
  else {
    percentAfterSalary = percentAfterRatings;
  }
  var finalPercentage = percentAfterSalary;
 if (percentAfterSalary > 0.13){
   finalPercentage = 0.13;
 }
 else if(percentAfterSalary < 0){
   finalPercentage = 0;
 }
 else {
   finalPercentage = percentAfterSalary;
 }
return finalPercentage;
};
  this.totalCompensation = function() {
    var totalCompensation;
    totalCompensation = annualSalary * (1 + this.bonusPercentage());
    return totalCompensation;
  };
  this.totalBonus = function (){
    var totalBonus;
    totalBonus = annualSalary * this.bonusPercentage();
    return totalBonus;
  };

};





function updateEmployees(employeesToUpgrade) {
  var upgradedEmployees = [];
  for(var i=0; i < employeesToUpgrade.length; i++){
    var oldEmployee = employeesToUpgrade[i];
    console.log(oldEmployee);
    var upgradedEmployee = new Employee(oldEmployee.name, oldEmployee.employeeNumber, oldEmployee.annualSalary, oldEmployee.reviewRating);
    upgradedEmployees.push(upgradedEmployee);
  }
  return upgradedEmployees;
}
var awesomeEmployees = updateEmployees(employees);
console.log(awesomeEmployees);
