function renderLicenseBadge(license) {
  console.log(license)
  if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license == 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license == 'Artistic License 2.0') {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
  }
  else if (license == 'GNU General Public License v2.0') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  else if (license == 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else ( license == "None");
  return " ";
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under ${license}.`;
  }
  return '';
}

// Creates the README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}


  ## Table of Contents
  - [Description](#Description)
  - [Deployment](#Deployment)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Features](#Features)
  - [Credits](#Credits)
  - [Contributing](#Contributing)
  - [License](#License)
  

  ## Deployment
  - [Deployed site](${data.deploymentLink})
  - [GitHub Repo](${data.repoLink})
  
  ## License 
  ${renderLicenseSection(data.license)}

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
  Forks are welcome!

  ## Badges
  ${renderLicenseBadge(data.license)}
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

  
  ## Questions
  Reach me at:
  - [GitHub](https://github.com/${data.gitHubProfile})
  - deuriartejared@gmail.com

`;
}

module.exports = generateMarkdown;

