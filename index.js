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






];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(data => {
fs.writeFileSync('readmetest.md', generateMarkdown(data), (err) =>
err ? console.log(err) : console.log('Successfully created README!'))
})

}

// Function call to initialize app
init();
