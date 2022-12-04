// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const GenerateMD = require('./generateMarkdown');
// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;
const { appendFile } = require('fs').promises;

//make a GenerateMd object
const gMD = new GenerateMD();

const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      default: 'Project Title',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is a desription of the program?',
      default: 'Needs a description of the project',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license do you want to use?',
      choices: ["None","Apache License 2.0", "GNU General Public License v3.0","MIT License","Mozilla Public License 2.0"],
      default: 'None',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the instructions for installing this software?',
      default: "Not Provided",
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage of this program?',
      default: "Not Provided",
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who contributed to this project/credits?',
      default: "Not Provided/No Credits",
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the instruction to run your tests?',
      default: "Not Provided",
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub Username:',
      default: "Not Provided/Unavailable",
    },
    {
      type: 'input',
      name: 'repo',
      message: 'Enter the repo name for this project:',
      default: 'Not Provided/Unavailable',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email address for questions?',
      default: "Not Provided/Unavailable",
    },
  ]);
};


// Use writeFileSync method to use promises instead of a callback function

// Bonus using writeFileSync as a promise
const init = () => {
  questions()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
   // .then(function(answers){console.log("this is the answers "+answers.title+" "+ answers.description);})
    .then((answers) => {writeFile('README.md', gMD.generateMarkdownTitle(answers.title, answers.description, answers.installation, answers.usage, answers.contributing, answers.test, answers.username, answers.repo, answers.email, answers.license)); appendFile('README.md', gMD.generateMarkdownLicense(answers.license));})
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();





