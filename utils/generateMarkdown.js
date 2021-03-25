// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

  ## Description
  $ ${data.description}

  ## Deployment
  - $ ${data.deploymentLink}
  - $ ${data.gitHubLink}
  
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

  ## How to Contribute
  Fork me! 
  
  ## Badges
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

`;
}

module.exports = generateMarkdown;

