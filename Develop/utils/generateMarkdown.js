// TODO: Create a function that returns a license badge based on which license is passed in

const { url } = require("inspector");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if statement
  if (license) {

    const chosenLicense = "![mit]('https://img.shields.io/github/license/thomascupchurch/potential-enigma')";
    // data.license;
    
  } else {
    return ''
  }
}
  // take in an array of badges specified by user

  // return string of selected badges
  // call this inside generateMarkdown
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const chosenBadges = renderLicenseBadge(data.badges);
  return `# ${data.title}
  
  ## ${`![mit](https://img.shields.io/github/license/thomascupchurch/potential-enigma)`}
  

`;

}

module.exports = generateMarkdown;
