const moment = require('moment');
// console.log(moment);
let thisYear = moment().format('YYYY');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // opting to use switch statement for analyzing the license selected by the user
  switch (license) {
    case 'GNU AGPLv3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'GNU LGPLv3':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return `<a href="https://www.gnu.org/licenses/agpl-3.0" target="_blank">here</a>`;
    case 'GNU GPLv3':
      return `<a href="https://www.gnu.org/licenses/gpl-3.0" target="_blank">here</a>`;
    case 'GNU LGPLv3':
      return `<a href="https://www.gnu.org/licenses/lgpl-3.0" target="_blank">here</a>`;
    case 'Mozilla Public License 2.0':
      return `<a href="https://opensource.org/licenses/MPL-2.0" target="_blank">here</a>`;
    case 'Apache License 2.0':
      return `<a href="https://opensource.org/licenses/Apache-2.0" target="_blank">here</a>`;
    case 'MIT License':
      return `<a href="https://opensource.org/licenses/MIT" target="_blank">here</a>`;
    case 'Boost Software License 1.0':
      return `<a href="https://www.boost.org/LICENSE_1_0.txt" target="_blank">here</a>`;
    case 'The Unlicense':
      return `<a href="http://unlicense.org/" target="_blank">here</a>`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return `<a href="https://www.gnu.org/licenses/agpl-3.0" target="_blank">here</a>`;
    case 'GNU GPLv3':
      return `<a href="https://www.gnu.org/licenses/gpl-3.0" target="_blank">here</a>`;
    case 'GNU LGPLv3':
      return `<a href="https://www.gnu.org/licenses/lgpl-3.0" target="_blank">here</a>`;
    case 'Mozilla Public License 2.0':
      return `<a href="https://opensource.org/licenses/MPL-2.0" target="_blank">here</a>`;
    case 'Apache License 2.0':
      return `<a href="https://opensource.org/licenses/Apache-2.0" target="_blank">here</a>`;
    case 'MIT License':
      return `Copyright ${thisYear} James Compagnoni

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
      (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, 
      publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
      subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
      THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
      CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
      DEALINGS IN THE SOFTWARE`;
    case 'Boost Software License 1.0':
      return `<a href="https://www.boost.org/LICENSE_1_0.txt" target="_blank">here</a>`;
    case 'The Unlicense':
      return `<a href="http://unlicense.org/" target="_blank">here</a>`;
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.projectLicense)}

  # ${data.projectTitle}
  ## Project Description
  ${data.projectDescription}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contributions)
  * [Tests](#tests)
  * [Questions?](#questions)

  ## Installation
  ${data.projectInstallation}

  ## Usage
  ${data.projectUsage}

  ## License
  ${data.projectLicense}

  ## Contribute
  ${data.projectContribute}

  ## Tests
  ${data.projectTests}

  ## Questions?
  I enjoy hearing back about my work. You can reach me at ${data.email}
  Alternatively, contact me on my GitHub page <a href="https://github.com/${data.github}">here</a>
  `;
}

module.exports = generateMarkdown;
