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
          name: 'badges',
          message: 'Would you like to add badges to your README?',
          default: false
        },

        {
          type: 'checkbox',
          name: 'badges',
          message: 'What badges do you want? (Check all that apply)',
          choices: ['MIT', 'GNU']
        },

        {
          type: 'checkbox',
          name: 'license',
          message: 'What license(s) do you want? (Check all that apply)',
          choices: ['MIT', 'GNU']
        },
      ])
      .then((inquirerData) => {
        const input = generateMD(inquirerData);
        writeToFile(input);
      }
      )
  };

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
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