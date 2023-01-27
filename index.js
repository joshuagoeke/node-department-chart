const fs = require('fs');
const inquirer = require('inquirer');
const { Employee } = require('./lib');
const { Manager } = require('./lib');
const { Engineer } = require('./lib');
const { Intern } = require('./lib');

const standardQs =[
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
    },
    //consider using math.random to assign this
    {
        type: 'input',
        name: 'id',
        message: "Now that the employee's biological and technological distinctiveness has been added to our own, by what number shall we refer to this employee? (What is their ID number?)",
    },
    {
        type: 'input',
        name: 'email',
        message: "We want to spam the employee's inbox with inane clutter for business purposes. Provide an email.",
    },
]

const newbie = inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: "Select the employee's role:",
        choices: ["Manager", "Engineer", "Intern"],
    },
])
.then((userInput) => {
    switch (userInput.role){
        case "Manager":
    }
})

