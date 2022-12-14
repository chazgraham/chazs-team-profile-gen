const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const { writeFile, copyFile } = require('./utils/generateWebPage.js');
const inquirer = require('inquirer');
const generateWebPage = require('./src/page-template.js');
const teamMembers = [];


const promptBuildTeam = () => {
  return inquirer.prompt([
      {
          type: 'list',
          name: 'newTeamMember',
          message: 'Do you have anymore team members?',
          choices: ['Manager', 'Engineer', 'Intern', 'None']
      }
  ])
  .then(memberChoice => {
      if(memberChoice.newTeamMember === 'Manager') {
        managerQuestions();
      }else if(memberChoice.newTeamMember === 'Engineer') {
          promptEngineer();
      } else if(memberChoice.newTeamMember === 'Intern') {
          promptIntern();
      } else {
          buildTeam();
      }
  })
}

const managerQuestions = () => {
  console.log(`
  =================
  Add a New Manager
  =================
  `);

  return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
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
          name: 'id',
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
          name: 'email',
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
          name: 'officeNumber',
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
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        console.log(manager)
        teamMembers.push(manager);
        promptBuildTeam()
    })
};

const promptEngineer = () => {
    console.log(`
    =================
    Add a New engineer
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
            name: 'id',
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
            name: 'email',
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
            name: 'github',
            message: 'What is your engineers github username?',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter your engineers github username!');
                return false;
              }
            } 
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptBuildTeam()
    })
}

const promptIntern = () => {
    console.log(`
    =================
    Add a New intern
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
            name: 'id',
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
            name: 'email',
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
            name: 'school',
            message: 'What is the name of the school your intern attends?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter your interns school!');
                    return false;
                }
            } 
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptBuildTeam()
    })
}


const buildTeam = () => {
  var fileContent = generateWebPage(teamMembers);
  writeFile(fileContent)
  copyFile()
}
promptBuildTeam()
