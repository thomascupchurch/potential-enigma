// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input

const promptReadme = () => {
    console.log(`
  =================
  Make a New README
  =================
  `);
    
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your website?" (Required)',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of your website (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a website description!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What languages did you use? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },

        {
          type: 'confirm',
          name: 'license1',
          message: 'Would you like to add a license to your README?',
          default: false
        },

        {
          type: 'checkbox',
          name: 'license2',
          message: 'What license(s) do you want? (Check all that apply)',
          choices: ['agpl-3.0', 'gpl-3.0', 'apache-2.0', 'lgpl-3.0', 'mpl-2.0', 'mit', 'bsl-1.0', 'unlicense', ''],
          when: (answers) => answers.license1 === true
        },

        {
          type: 'input',
          name: 'githubUser',
          message: 'What is your github userName?',
          validate: githubUserInput => {
            if (githubUserInput) {
              return true;
            } else {
              console.log('You need to enter a github userName!');
              return false;
            }
          }
        },

        {
          type: 'input',
          name: 'installation',
          message: 'What installation instructions do you want to include?',
        },

        {
          type: 'input',
          name: 'usage',
          message: 'What usage directions would you like to share?'
        },

        {
          type: 'input',
          name: 'userEmail',
          message: 'What is your email address?',
          validate: githubUserInput => {
            if (githubUserInput) {
              return true;
            } else {
              console.log('You need to enter an email address!');
              return false;
            }
          }
        },

        {
          type:'input',
          name: 'contributing',
          message: 'What instructions do you have for potential contributors?'
        },

        {
          type: 'input',
          name: 'tests',
          message: 'What tests would you like to include?'
        },

        {
          type: 'input',
          name: 'screenshot',
          message: 'Enter the url for any screenshot you have.'
        }
      ])
      .then((inquirerData) => {
        // generateMD.renderLicenseBadge(inquirerData.license2);
        writeToFile(inquirerData);
      }
      )
  };

// TODO: Create a function to write README file
function writeToFile(data) {
  // const newData = generateMD.generateMarkdown(data);  
  return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', generateMD.generateMarkdown({ ...data }), err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
promptReadme();