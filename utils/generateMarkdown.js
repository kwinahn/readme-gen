function generateMarkdown(answers) {
  const { projectName, description, installation, projectUse, contributions, test, license, githubUsername, email } = answers
  return `
![Github License](https://img.shields.io/badge/license-${license}-blue)
# ${projectName} 

#### Table of Contents
1. [Project Description](#project-description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution Guide](#contributions)
5. [License](#license)
6. [Questions](#questions)

## Project Description
* ${description}

## Installation
* ${installation}

## Usage Information
* ${projectUse}

## Contributions
* ${contributions}

## Test Instructions
* ${test}

## License
* Licensed under ![Github License](https://img.shields.io/badge/license-${license}-blue)

## Questions
* Find me on Github: [${githubUsername}](http://github.com/${githubUsername})
* For questions about this project please contact me at: ${email}.
`;
}

module.exports = generateMarkdown;