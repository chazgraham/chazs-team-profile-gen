

// create manager card
const generateManager = manager => {
    return `
        <section class="card is-responsive">
            <div class="card-content has-background-link">
                <h2 class="title has-text-white">${manager.name}</h2>
                <h3 class="subtitle has-text-white">Manager</h3>
            </div>
            <div class="card-content">     
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="${manager.email}">${manager.email}</a></p>
                <p>Office: ${manager.officeNumber}</p>
            </div>
        </section>
    `;
};


// create engineer cards
const generateEngineer = engineer => {
    return `
        <section class="card is-responsive">
            <div class="card-content has-background-link">
                <h2 class="title has-text-white">${engineer.name}</h2>
                <h3 class="subtitle has-text-white">Engineer</h3>
            </div>
            <div class="card-content">     
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </section>
    `;
};

// create intern cards
const generateIntern = intern => {
    return `
        <section class="card is-responsive">
            <div class="card-content has-background-link">
                <h2 class="title has-text-white">${intern.name}</h2>
                <h3 class="subtitle has-text-white">Intern</h3>
            </div>
            <div class="card-content">     
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </section>
    `;
};

// export function to generate entire page 
function generateWebPage (teamMembers) {
    let generatedTeam = teamMembers.map(teamMember => {
        switch (teamMember.getTitle()) {
            case "Engineer":
               return generateEngineer(teamMember);
                
            case "Intern":
               return generateIntern(teamMember);
                
            case "Manager":
               return generateManager(teamMember);
                
        
            default:
                break;
        }
    }) 
    console.log(generatedTeam);
    generatedTeam = generatedTeam.join('')
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Portfolio Generator</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" />
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
    <header>
        <div>
            <h1 class="page-title">My Team</h1>
        </div>
    </header>
      <main>
        ${generatedTeam}
      </main>
      <footer></footer>
    </body>
    </html>
    `;
};

module.exports = generateWebPage;