function renderEmployee(employee){
    switch(employee.getRole()){

        case 'Manager':

            return `
            <div class="card" style="width: 18rem;">
            <div class="card-header">
              <h2>${Manager.getName()}</br>&#x2615 Manager</h2>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${Manager.getId()}</li>
              <li class="list-group-item">E-mail: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
              <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
            </ul>
            </div>`
            break;

        case 'Engineer':

            return `
            <div class="card" style="width: 18rem;">
            <div class="card-header">
              <h2>${Engineer.getName()}</br>&#x1f453 Engineer</h2>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${Engineer.getId()}</li>
              <li class="list-group-item">E-mail: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://www.github.com/${Engineer.getGitHub()}">github.com/${Engineer.getGitHub()}</a></li>
            </ul>
            </div>`
            break;

        case 'Intern':

            return `
            <div class="card" style="width: 18rem;">
            <div class="card-header">
              <h2>${Intern.getName()}</br>&#x1F393 Intern</h2>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Employee ID: ${Intern.getId()}</li>
              <li class="list-group-item">E-mail: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${Intern.getSchool()}</li>
            </ul>
            </div>`
            break;
        default:
            return '';
    }
}

const employeeCards = (array) => {
    array.forEach(element => {
        renderEmployee(element)
    });
}

function generateHTML() {
    return `<!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/assets/style.css">
        <title>BOGUS COMPANY INC.</title>
      </head>
      <body>
        <header>
            <h1>Development Department</h1>
        </header>
        <div class = "card-deck" id="all-cards">
           
          ${employeeCards}
      
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </body>
    </html>`
};

module.exports = generateHTML;