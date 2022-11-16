// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What does your project do?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please include any installation instructions for your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license will your project use?',
        choices: ["MIT", "Apache", "Mozilla", "GNU", "None"]
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who else contributed to your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please include any tests for your project?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the github repo link for your project?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(data => {
fs.writeFileSync('./dist/READMEtest.md', generateMarkdown(data), (err) =>
err ? console.log(err) : console.log('Successfully created README!'))
})

}

// Function call to initialize app
init();
