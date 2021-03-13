const jest = require("jest");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib-classes/manager");
const Engineer = require("./lib-classes/engineer");
const Intern = require("./lib-classes/intern");
const inherits = require("util");
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
                        console.log(generateManager(manager));
                        djKhaled();
                    })
                    break;
            }
        })
};

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
            // console.log(generateHtml(team));
            
        }

    }
    )
}


start();


// generate html file to appear in dist-output 

function generateHtml(manager, Engineer, Intern) {
    return ` 
    
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>Document</title>

</head>

<body>
    <div id="myTeam"
        style="background:lightcoral; border: 5px solid black; color:white; text-align: center;padding: 20px;">
        <h1 class="header">My Team</h1>
    </div>

    <div class="container" style="border: 5px solid black; margin-top: 50px;">
        <div class="row">
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-header" class="manager" style="background: aqua;">
                        ${Manger.name} <br>
                        Manager
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" class="id">ID:</li>
                        <li class="list-group-item" class="email"> Email:</li>
                        <li class="list-group-item" class="officeNum">Office number: </li>
                    </ul>
                </div>
            </div>


            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-header" class="engineer" style="background: aqua;">
                        ${Engineer.name} <br>
                        Engineer
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" class="id">ID:</li>
                        <li class="list-group-item" class="email">Email:</li>
                        <li class="list-group-item" class="gitHub">GitHub:</li>
                    </ul>
                </div>
            </div>


            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-header" class="intern" style="background: aqua;">
                        ${Intern.name} <br>
                        Intern
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" class="id">ID:</li>
                        <li class="list-group-item" class="email">Email:</li>
                        <li class="list-group-item" class="school">University:</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
        crossorigin="anonymous"></script>


</body>

</html>
    
    
    `;
}

function generateManager(manager){
    return `  <div class="container" style="border: 5px solid black; margin-top: 50px;">
    <div class="row">
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <div class="card-header" class="manager" style="background: aqua;">
                    ${manager.name} <br>
                    Manager
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" class="id">ID:</li>
                    <li class="list-group-item" class="email"> Email:</li>
                    <li class="list-group-item" class="officeNum">Office number: </li>
                </ul>
            </div>
        </div> `
}