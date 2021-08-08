// TODO: Create a function that returns a license badge based on which license is passed in

const { url } = require("inspector");


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if statement
 
  return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  
  } 

  
  // call this inside generateMarkdown
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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
  ## Description
  ## Table of Contents
  ## Installation
  ## Usage
   
  ${renderLicenseSection(data.license2)}
  ${renderLicenseLink(data.license2)}
  ## Contributing: 
  ${data.contributors}
  ## Tests
  ## Questions:
  Learn more at github.com/${data.githubuser} 

  Email the Developer at ${data.userEmail}`;

}


module.exports.renderLicenseBadge = renderLicenseBadge;
module.exports.generateMarkdown = generateMarkdown;


// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
