// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  if (license !== 'None') {
    // var replaceLicense = license.join('%20'); 
    return `[![${license}](https://img.shields.io/badge/${license}-green.svg)]`
  }
  return " ";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under ${license} .`;
  }
  return '';
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  $ ${data.description}


  ## Table of Contents
  - Description
  - Deployment
  - Installation
  - Usage
  - Features
  - Credits
  - Contributing
  - License
  

  ## Deployment
  - $ ${data.deploymentLink}
  - $ ${data.repoLink}
  
  ![screenshot1](${data.relativePath1})
  ![screenshot2](${data.relativePath2})
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}


  ## Features
  - ${data.feature1}
  - ${data.feature2}
  - ${data.feature3}
  - ${data.feature4}
  - ${data.feature5}

  ## Credits  
  ${data.credits}

  ## Contributing
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
  Forks are welcome!

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  
  ## Questions
  Reach me at:
  [GitHub](https://github.com/${data.gitHubProfile})
  Email: deuriartejared@gmail.com

`;
}

module.exports = generateMarkdown;

