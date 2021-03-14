const jest = require("jest");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib-classes/manager");
const Engineer = require("./lib-classes/engineer");
const Intern = require("./lib-classes/intern");
const inherits = require("util");
const path = require("path");

const squad = require("./template");

const OUTPUT_DIR = path.resolve(__dirname, "dist-output"); // 
const outputPath = path.join(OUTPUT_DIR, "squad.html") // to create team.html after prompts answered

const team = []


// start application functions go here
function start() {
    
    addEmployee()
}


// function add employee begins here. TRY SWITCH INSTEAD OF IF STATEMENTS!
// inquire prompt question name, email, id, role, 
// if the employee is a manager add office number info(newInfo)
// if the employee is an engineer add github link info(newInfo)
// if the employee is an intern add school info (newInfo)
// Add option to add additional employee prompt

function addEmployee() {
    inquirer.prompt([
        {
            message: 'Enter new employee name.',
            type: 'input',
            name: 'name',
            validate: (value) => { if (value) { return true } else { return 'Please enter name of employee.' } },

        },
        {
            message: 'Submit employee ID.',
            type: 'input',
            name: 'ID',
            validate: (value) => { if (value) { return true } else { return 'Please submit employee ID.' } },
        },
        {
            message: 'Enter employee Email address.',
            type: 'input',
            name: 'Email',
            validate: (value) => { if (value) { return true } else { return 'Please enter an employee Email address.' } },
        },
        {
            message: 'Select an employee role.',
            type: 'list',
            choices: [
                'Engineer',
                'Intern',
                'Manager',
            ],
            name: 'role'
        },

    ])

        .then(function ({ name, id, email, role }) {

            switch (role) {
                case "Engineer":
                    inquirer.prompt({
                        type: "input",
                        message: "What is your GitHub username?",
                        name: "github"
                    })
                        .then(function ({ github }) {
                            const engineer = new Engineer(name, id, email, github)
                            team.push(engineer);
                            djKhaled();
                        })
                    break;
                case "Intern":
                    inquirer.prompt({
                        type: "input",
                        message: "What school do you attend?",
                        name: "school"
                    })
                        .then(function ({ school }) {
                            const intern = new Intern(name, id, email, school)
                            team.push(intern);
                            djKhaled();
                        })
                    break;
                case "Manager":
                    inquirer.prompt({
                        type: "input",
                        message: "What is your Office Number?",
                        name: "officeNumber"
                    }).then(function ({ officeNumber }) {
                        const manager = new Manager(name, id, email, officeNumber)
                        team.push(manager);
                        djKhaled();
                        
                    })
                    break;
            }
        })
};

function writeToFile(){
    fs.writeFileSync(outputPath, squad(team), (err) => {
        if(err) {
            return console.log(err)
        } else {
            console.log('Employee added to squad!');
        }
    })
}

function djKhaled() {

    inquirer.prompt({
        type: 'confirm',
        message: 'Would you like to add another employee?',
        name: 'anotherOne',
    }).then(function (anotherOne) {
        console.log(anotherOne.anotherOne)
        if (anotherOne.anotherOne) {
            addEmployee();
        } else {
        writeToFile()
        }

    })
}

start();