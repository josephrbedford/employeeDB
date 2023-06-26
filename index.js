const MainMenuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'Select an option.',
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

const AddDeptQuestions = [
    {
        type: 'input',
        name: 'department_name',
        message: 'Enter New Department Name'
    }
]

const 