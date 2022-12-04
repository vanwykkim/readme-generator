// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const GenerateMD = require('./generateMarkdown');
// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { appendFile } = require('fs').promises;

//make a GenerateMd object
const gMD = new GenerateMD();

const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is a desription of the program?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
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
    .then((answers) => {appendFile('README.md', gMD.generateMarkdownTitle(answers.title, answers.description)); appendFile('README.md', gMD.generateMarkdownTitle(answers.title, answers.description)); appendFile('README.md', gMD.generateMarkdownTitle(answers.title, answers.description));})
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();

  //FIXME: This the challenge notes from UW

// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();