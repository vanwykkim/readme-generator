// //Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under


// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

//GenerateMarkdown object
function GenerateMarkdown() {

  }

// TODO: function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
GenerateMarkdown.prototype.generateMarkdownTitle = function(title, description, installation, usage, credits, tests, username, url, email, license){
    
    
    return `# ${title}

## Description 

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${installation}

## Usage 

${usage}

## Contributing

If wishing to contribute please follow the Contributor Covenant:

[Contributor Covenant](https://www.contributor-covenant.org/)

## Credits

${credits}

## Tests

To run the tests:
${tests}

## Questions

Github username: ${username}

GitHub link to profile: [${url}]

For further questions please email: ${email}

`;
};


// TODO: function that returns the license link
// If there is no license, return an empty string
GenerateMarkdown.prototype.renderLicenseLink = function(license) {

};

// TODO: function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
GenerateMarkdown.prototype.renderLicenseBadge = function(license) {

};


// TODO: function that returns the license section of README
// If there is no license, return an empty string 
GenerateMarkdown.prototype.generateMarkdownLicense = function(license){
    if(license !="None"){
        let badge = this.renderLicenseBadge(license);
        let licenseLink = this.generateLicenseLink(license)

        return `## License

        ${badge} 
        ${licenseLink}
   
        `;
    }else {return `## License

No license specified
`
    ;}
   
};


 module.exports = GenerateMarkdown;
