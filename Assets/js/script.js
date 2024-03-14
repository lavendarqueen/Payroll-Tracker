// Get a reference to the #add-employeesArray-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");
console.log(addEmployeesBtn);
// Collect employee data

let employeesArray = [];

const collectEmployees = function () {
  console.log("collecting employeesArray");
  let addEmployees = true;
  while (addEmployees) {
    let firstName = prompt("Enter Employee First Name");
    let lastName = prompt("Enter Empoloyee Last Name");
    let salary = prompt("Enter Employee Salary");
    if (isNaN(salary)) {
      salary = 0;
    } else {
      parseFloat(salary);
    }

    let formattedSalary = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    // TODO: Get user input to create and return an array of employee objects
    let newEmployee = {
      lastName: lastName,
      firstName: firstName,
      salary: formattedSalary.format(salary),
      //avgSalary: avgSalary,
    };

    console.log(newEmployee);
    employeesArray.push(newEmployee);
    addEmployees = confirm("Add another employee?");

    console.log("empArr1: ", employeesArray);
  }
  return employeesArray;
};
// Display the average salary
const displayAverageSalary = function (employees) {
  let totalSalaries = 0;
  let numEmployees = employees.length;
  let formattedSalary = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  for (const employee of employees) {
    //we are getting reid of the the $ symbol that's coming from line 30
    let convertedSalary = Number(
      employee.salary.split("$")[1].split(",").join("")
    );
    totalSalaries += convertedSalary;
  }
  let avgSalary = totalSalaries / numEmployees;
  console.log(avgSalary);
  console.log(totalSalaries);
  console.log("empArr2: ", employees);
  console.log(
    `The average employee salary between our ${numEmployees} employee(s) is ${formattedSalary.format(
      avgSalary
    )}.`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  let randomEmployee =
    employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(
    `Congratulations ${randomEmployee.firstName} ${randomEmployee.lastName} our random drawing winner.`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  console.log("displaying employeesArray");

  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employeesArray = collectEmployees();
  console.log("tracking employee data");

  console.table(employeesArray);

  employeesArray.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayAverageSalary(employeesArray);

  console.log("==============================");

  getRandomEmployee(employeesArray);
  displayEmployees(employeesArray);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
