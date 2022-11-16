// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "MIT"){
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}
else if (license === "Apache"){
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
}
else if (license === "Mozilla"){
  return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
}
else if (license === "GNU"){
  return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
}
else {return ``}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return `[MIT](https://choosealicense.com/licenses/mit/)`
  }
  else if (license === "Apache"){
    return `[Apache](https://choosealicense.com/licenses/apache-2.0/)`
  }
  else if (license === "Mozilla"){
    return `[Mozilla](https://choosealicense.com/licenses/mpl-2.0/)`
  }
  else if (license === "GNU"){
    return `[GNU](https://choosealicense.com/licenses/agpl-3.0/)`
  }
  else {return ``}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#email)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseLink(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Please check me out at http://github.com/${data.github}
  <br/>
  ${data.email}
`;
}

module.exports = generateMarkdown;
