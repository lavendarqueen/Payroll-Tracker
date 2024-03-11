// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");
console.log(addEmployeesBtn);
// Collect employee data

let employeesArray = [];

const collectEmployees = function () {
  console.log("collecting employees");
  let addEmployees = true;
  while (addEmployees) {
    let firstName = prompt("Enter Employee First Name");
    let lastName = prompt("Enter Empoloyee Last Name");
    let salary = prompt("Enter Employee Salary");
    if (isNaN(salary)) {
      salary = 0;
    } else {
      Number((salary = 0));
      let USDollar = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
    }

    // TODO: Get user input to create and return an array of employee objects
    let newEmployee = [
      {
        lastName: `${lastName}`,
        firstName: `${firstName}`,
        salary: `${salary}`,
        salaryAvg: `${salary}`,
      },
    ];
    employeesArray = employeesArray.concat(newEmployee);
    addEmployees = confirm("Add another employee?");
  }
  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  Map();
  console.log("displaying average salary");
  let salaryArray = [];
  let sum = 0;
  const averageSalary = function (employeesArray) {
    let averageSalary = [
      {
        salaryAvg: `${salary}`,
      },
    ];
  };
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  let randomEmployee =
    employeesArray[Math.floor(Math.random * employeesArray.length)];
  // TODO: Select and display a random employee

  console.log("get random employee");
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  console.log("displaying employees");

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
  const employees = collectEmployees();
  console.log("tracking employee data");

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
