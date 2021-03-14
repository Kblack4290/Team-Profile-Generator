const generateSquad = fullSquad => {
    const createManager = Manager => {
        return `
        <div class="col-md-4">
            <div class="card" style="width: 18rem;" class= "rounded shadow">
                <div class="card-header" class="manager" style="background: aqua;">
                    ${Manager.getName()} <br>
                        Manager
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" class="id">ID: ${Manager.getId()}</li>
                        <li class="list-group-item" class="email"> Email: ${Manager.getEmail()}</li>                    
                        <li class="list-group-item" class="officeNum">Office number: ${Manager.getOfficeNumber()} </li>
                    </ul>
                </div>
            </div> `
    };


    const createEngineer = Engineer => {
        return `
    
    <div class="col-md-4">
        <div class="card" style="width: 18rem;" class= "rounded shadow">
            <div class="card-header" class="engineer" style="background: aqua;">
            ${Engineer.getName()} <br>
            Engineer
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" class="id">ID: ${Engineer.getId()}</li>
                <li class="list-group-item" class="email">Email: ${Engineer.getEmail()}</li>
                <li class="list-group-item" class="gitHub">GitHub: <a href="https://github.com/${Engineer.getGithub()}" target="_blank">${Engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>`
};


    const createIntern = Intern => {
        return `
        
    <div class="col-md-4">
        <div class="card" style="width: 18rem;" class= "rounded shadow">
            <div class="card-header" class="intern" style="background: aqua;">
            ${Intern.getName()} <br>
            Intern
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" class="id">ID: ${Intern.getId()}</li>
                <li class="list-group-item" class="email">Email: <a href="mailto:${Intern.getEmail()}?subject= Interview Request">${Intern.getEmail()}</a></li>
                <li class="list-group-item" class="school">University: ${Intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        
        `
    };

    const htmlArray = [];

    htmlArray.push(fullSquad.filter(employee => employee.getRole()=== 'Manager').map(manager => createManager(manager)));
    htmlArray.push(fullSquad.filter(employee => employee.getRole()=== 'Engineer').map(engineer => createEngineer(engineer)));
    htmlArray.push(fullSquad.filter(employee => employee.getRole()=== 'Intern').map(intern => createIntern(intern)));

    return htmlArray.join('');
}

module.exports = squad => {
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
        ${generateSquad(squad)}
        </div>

    </div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
        crossorigin="anonymous"></script>


</body>

</html>
    
    
    `
}
