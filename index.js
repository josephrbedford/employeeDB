const inquirer = require('inquirer');
const { MainMenuQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions };
const EmployeeDatabase = require('./db/EmployeeDatabase.js');

const db = new EmployeeDatabase({
    host: 'localhost';
    user: 'root',
    password: 'happyjoy',
    database: 'employee_db'
});

db.connect();

const doMenuQuestions = () => {

    inquirer
        .prompt(mainMenuQuestions)
        .then((response) => {

            
        })
}