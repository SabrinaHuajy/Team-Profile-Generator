const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "teamprofile.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

teamArray = [];

function run() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Choose employee's role:",
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern', 'No More Members'],
            },
        ]).then(function (inputs) {
            if (inputs.role === 'Manager') {
                managerQuestion();
            }
            else if (inputs.role === 'Engineer') {
                engineerQuestion();
            }
            else if (inputs.role === 'Intern') {
                internQuestion();
            }
            else if (inputs.role === 'Others') {
                createTeam();
            }
        })
}

function managerQuestion() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Name of the teams manager:',
            name: 'mName',
            validate: (mName) => {
                if (mName) {
                    return true;
                }
                else {
                    console.log('Name of the teams manager:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "The manager's ID:",
            name: 'mID',
            validate: (mID) => {
                if (mID) {
                    return true;
                }
                else {
                    console.log("The manager's ID:");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "The manager's email:",
            name: 'mEmail',
            validate: (mEmail) => {
                if (mEmail) {
                    return true;
                }
                else {
                    console.log("The manager's email:");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "The manager's office number:",
            name: 'mOfficeNumber',
            validate: (mOfficeNumber) => {
                if (mOfficeNumber) {
                    return true;
                }
                else {
                    console.log("The manager's office number:");
                    return false;
                }
            }
        },
    ]).then((answers) => {
        const manager = new Manager(answers.mName, answers.mID, answers.mEmail, answers.mOfficeNumber);
        teamArray.push(manager);
        run();
    });
}

function engineerQuestion() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'The name of the Engineer:',
            name: 'eName',
            validate: (eName) => {
                if (eName) {
                    return true;
                }
                else {
                    console.log('The name of the Engineer:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "The Engineer's ID:",
            name: 'eID',
            validate: (eID) => {
                if (eID) {
                    return true;
                }
                else {
                    console.log("The Engineer's ID:");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "The Engineer's email:",
            name: 'eEmail',
            validate: (eEmail) => {
                if (eEmail) {
                    return true;
                }
                else {
                    console.log("The Engineer's email:");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "The Engineer's github username:",
            name: 'github',
            validate: (github) => {
                if (github) {
                    return true;
                }
                else {
                    console.log("The Engineer's github username:");
                    return false;
                }
            }
        },
    ]).then((answers) => {
        const engineer = new Engineer(answers.eName, answers.eID, answers.eEmail, answers.github);
        teamArray.push(engineer);
        run();
    });
}

function internQuestion() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'The name of the Intern:',
            name: 'iName',
            validate: (iName) => {
                if (iName) {
                    return true;
                }
                else {
                    console.log('The name of the Intern:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "The Intern's ID:",
            name: 'iID',
            validate: (iID) => {
                if (iID) {
                    return true;
                }
                else {
                    console.log("The Intern's ID:");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "The Intern's email:",
            name: 'iEmail',
            validate: (iEmail) => {
                if (iEmail) {
                    return true;
                }
                else {
                    console.log("The Intern's email:");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "The institute Intern came from:",
            name: 'school',
            validate: (school) => {
                if (school) {
                    return true;
                }
                else {
                    console.log("The institute Intern came from:");
                    return false;
                }
            }
        },
    ]).then((answers) => {
        const intern = new Intern(answers.iName, answers.iID, answers.iEmail, answers.school);
        teamArray.push(intern);
        run();
    });
}

function createTeam() {
    console.log("Success! Team Profile created.")
    fs.writeFile('../starter/output/teamprofile.html', renderTeam(teamArray), function (err) {
        if (err) {
            return console.log(err)
        }
    });
}

run();
