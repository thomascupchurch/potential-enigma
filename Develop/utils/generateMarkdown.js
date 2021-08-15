// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");
const { url } = require("inspector");


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // return `![github license](https://img.shields.io/badge/license-${license}-blue)`

  return `![license badge](https://img.shields.io/static/v1?label=license&message=${license}&color=lightgreen)`
}
  

function renderLicenseLink(license) {

  return `(https://choosealicense.com/licenses/${license}/)`

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return '## License: ';
  } else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license2)}
  
  Table of Contents
  =================
  * [Description](#description)
  * [Screenshot](#screenshot)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Languages](#languages)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Description
  ${data.description}
  ## Screenshot
  ![screenshot](${data.screenshot})
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Languages
  ${data.languages}
  ${renderLicenseSection(data.license2)}
  ${renderLicenseLink(data.license2)}
  ## Contributing: 
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Learn more at github.com/${data.githubUser} 

  Email the Developer at ${data.userEmail}`;

}


module.exports.renderLicenseBadge = renderLicenseBadge;
module.exports.generateMarkdown = generateMarkdown;
// module.exports.renderTableOfContents = renderTableOfContents;

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
