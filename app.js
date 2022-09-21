const { writeFile, copyFile } = require('./utils/generateWebPage.js');
const inquirer = require('inquirer');
const generateWebPage = require('./src/page-template.js');

const teamQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your team managers name?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the name of your team manager!');
                  return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your team managers ID number?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the ID number!');
                  return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your team managers email adress?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter managers email!');
                  return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is your team managers office number?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter managers office number!');
                  return false;
                }
            } 
        },
        {
            type: 'list',
            name: 'teamMember',
            message: 'Do you have anymore team members?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then(teamQuestions => {
        if (teamQuestions.teamMember === 'Engineer') {
            return promptEngineer(); 
        } else if (teamQuestions.teamMember === 'Intern') {
            return promptIntern();
        } else {
            return;
        }
    })
}

const promptEngineer = teamData => {
    console.log(`
    =================
    Add a New engineer
    =================
    `);

    if (!teamData.engineers) {
        teamData.engineers = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of your engineer?',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter your engineers name!');
                return false;
              }
            } 
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the ID number of your engineer?',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter your engineers ID number!');
                return false;
              }
            } 
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your engineers email?',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter your engineers email!');
                return false;
              }
            } 
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is your engineers github username?',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter your engineers github username!');
                return false;
              }
            } 
        },
        {
            type: 'list',
            name: 'teamMember',
            message: 'Do you have anymore team members?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then(engineerData => {
        teamData.engineers.push(engineerData)
        if (engineerData.teamMember === 'Engineer') {
            return promptEngineer(teamData); 
        } else if (engineerData.teamMember === 'Intern') {
            return promptIntern();
        } else {
            return teamData;
        }
    })
}

const promptIntern = teamData => {
    console.log(`
    =================
    Add a New intern
    =================
    `);

    if (!teamData.interns) {
        teamData.interns = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your interns name?',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter your interns name!');
                return false;
              }
            }   
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your interns ID?',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter your interns ID!');
                return false;
              }
            } 
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your interns email?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter your interns email!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the name of the school your intern attends?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter your interns school!');
                    return false;
                }
            } 
        },
        {
            type: 'list',
            name: 'teamMember',
            message: 'Do you have anymore team members?',
            choices: ['Engineer', 'Intern', 'None']  
        }
    ])
    .then(internData => {
        teamData.interns.push(internData)
        if (internData.teamMember === 'Engineer') {
            return promptEngineer(); 
        } else if (internData.teamMember === 'Intern') {
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    })
}

teamQuestions()
    .then(teamData => {
        return generateWebPage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
      })
      .then(copyFileResponse => {
        console.log(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      });
    