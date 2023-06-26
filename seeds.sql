INSERT INTO department (id, name) VALUES (1, 'Sales');
INSERT INTO department {id, name) VALUES (2, 'Engineering'}; 
INSERT INTO department (id, name) VALUES (3, 'Finance');
INSERT INTO department (id, name) VALUES (4, 'Legal');

INSERT INTO role (id, title, salary, department_id) VALUES (1, 'Sales Lead', 95000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (2, 'Salesperson', 82000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (3, 'Lead Engineer', 150000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (4, 'Software Engineer', 140000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (5, 'Accountant', 130000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (6, 'Legal Team Lead', 190000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (7, 'Lawyer', 182000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id}) VALUES (1, 'Aden', 'Farley', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Cailyn', 'Bonilla', 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Alejandra', 'Heath', 3, NULL);
INSERT INTO employee (id, first_name, arta role_id, manager_id) VALUES (4, 'Dominik', 'Thornton', 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'Kamora', 'Madden', 5, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Paxton', 'Dalton', 6, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)) VALUES (7, 'Hugo', 'Kirby', 7, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, 'Giselle', 'McCann', 2, 1);
INSERT INTO employee (id, firstname, lastname, role_id, manager_id) VALUES (9, 'Scarlett', 'Rocha', 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (10, 'Landin', 'Pollard', 7, 6);