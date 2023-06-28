// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is your project title?'
    },
    {
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project:'
    },
    
    {
        name: 'install',
        message: 'What are the steps required to install your project?'
    },
    {
        name: 'usage',
        message: 'Provide instructions for use:'
    },
    {
        name: 'contributions',
        message: 'List your collaborators, if any.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your license?',
        choices: [
            'MIT',
            'Apache License 2.0',
            'GNU General Public License (GPL)',
            'BSD 3-Clause "New" or "Revised" License',
            'Creative Commons Attribution 4.0 International License',
            'Mozilla Public License 2.0',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License (AGPL)',
            'Boost Software License 1.0',
            'ISC License (ISC)',
        ]
    },
    {
        name: 'tests',
        message: 'Write tests for your application and provide examples on how to run them here.'
    },
    //These questions both go inside the Questions section
    {
        name: 'github',
        message: 'Whats your Github username?S'
    },
    {
        name: 'email',
        message: 'Whats your email address?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('The README file is ready!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        writeToFile('README.md', generateMarkdown(answers));
    });
};

// Function call to initialize app
init();
