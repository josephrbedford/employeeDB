const MainMenuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'Make a selection:',
        choices: [
            { value: 'view_departments', name: "View Departments" },
            { value: 'view_roles', name: "View Roles" },
            { value: 'view_employees', name: "View Employees" },
            { value: 'add_department', name: "Add Department" },
            { value: 'add_role', name: "Add Role" },
            { value: 'add_employee', name: "Add Employee" },
            { value: 'update_role', name: "Update Role" },

        ]
    }
]

const AddDepartmentQuestions = [
    {
        type: 'input',
        name: 'department_name',
        message: 'New Department Name?'
    },
]

const AddRoleQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'New Role Title?'
    },
    {
        type: 'number',
        name: 'salary',
        message: 'Enter Salary (numeric)',
        validate: function (value) {
            const valid = !isNaN(parseInt(value));
            return valid || "Please enter a number";
        
        }
    },
    {
        type: 'list',
        name: 'department_id',
        message: 'Select Department for Role',
        choices: [
        ],
    },
    ]

    const AddEmployeeQuestions = [
        {
        type: 'input',
        name: 'first_name',
        message: 'Enter First Name'
    },
    {
        type: 'input',
        name: 'tlast_name',
        message: 'Enter Last Name'
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'Select Manager for Employee',
        choices: [
        ],
    },
]
    
const UpdateEmployeeRoleQuestions = [
    {
        type: 'list',
        name: 'employee_id',
        message: 'Select the Employee to Update:',
        choices: [
        ],
    }
    {
        type: 'list',
        name: 'role_id',
        message: 'Select Employee\'s new Role:',
        choices: [
        ],
    }
]

module.exports = { MainMenuQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions };


