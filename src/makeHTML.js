const fs = require('fs');
const inquirer = require('inquirer');
const { Employee } = require('./lib');
const { Manager } = require('./lib');
const { Engineer } = require('./lib');
const { Intern } = require('./lib');

function renderEmployee(employee){
    switch(employee.getRole()){
        case 'Manager':

            return `<div class="card" style="width: 18rem;">
            <div class="card-header">
              <h2>Michael Scott</br>&#x2615 Manager</h2>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${Manager.getId()}</li>
              <li class="list-group-item">E-mail: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
              <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
            </ul>
          </div>
            `
    }
}