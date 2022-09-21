// create manager card


// create engineer cards
const generateEngineer = engineersArr => {
    return `
        <section class="card" id="team-member">
            <div class="flex-row justify-space-between">
            ${engineersArr
                .map(({engineerName, engineerId, engineerEmail, engineerGithub}) => {
                    return`
                    <div class="col-12 mb-2 bg-dark text-light p-3">
                        <h2 class="">${engineerName}</h2>
                        <h3 class="">Engineer</h3>
                        <p>${engineerId}</p>
                        <p>${engineerEmail}</p>
                        <a href="${engineerGithub}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
                    </div>
                `;
                })
                .join('')}
            </div>
        </section>
    `;
};

// create intern cards
const generateIntern = internsArr => {
    return `
        <section class="card" id="team-member">
            <div class="flex-row justify-space-between">
            ${internsArr
                .map(({internName, internId, internEmail, internSchool}) => {
                    return`
                    <div class="col-12 mb-2 bg-dark text-light p-3">
                        <h2 class="">${internName}</h2>
                        <h3 class="">Engineer</h3>
                        <p>${internId}</p>
                        <p>${internEmail}</p>
                        <p>${internSchool}</p>
                    </div>
                    `;
                })
                .join('')}
            </div>
        </section>
    `;
};

// export function to generate entire page 

module.exports = templateData => {
    const { engineers, interns, ...manager} = templateData;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
      </header>
      <main class="container my-5">
        <section class="card" id="team-member">
            <div class="flex-row justify-space-between">
                <div class="col-12 mb-2 bg-dark text-light p-3">
                    <h2 class="">${manager.managerName}</h2>
                    <h3 class="">Engineer</h3>
                    <p>${manager.managerId}</p>
                    Email: <a href="${manager.managerEmail}">${manager.managerEmail}</a>
                    <p>${manager.managerOfficeNumber}</p>
                </div>
            </div>
        </section>
        ${generateEngineer(engineers)}
        ${generateIntern(interns)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `;
}