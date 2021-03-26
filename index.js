// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Enter your project title.",
        name: "title",
    },
    {
        type: "input",
        message: "Write a description for your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Enter your app's deployed url.",
        name: "deploymentLink",
    },
    {
        type: "input",
        message: "Enter your project's github repo url.",
        name: "gitHubLink",
    },
    {
        type: "input",
        message: "Enter the relative path of your first screenshot.",
        name: "relativePath1",
    },
    {
        type: "input",
        message: "Enter the relative path of your second screenshot.",
        name: "relativePath2",
    },
    {
        type: "input",
        message: "Descripe how a user installs your application.",
        name: "install",
    },
    {
        type: "input",
        message: "Descripe how a user uses your application.",
        name: "usage",
    },
    {
        type: "input",
        message: "Name a feature of your application.",
        name: "feature1",
    },
    {
        type: "input",
        message: "Name another feature of your application.",
        name: "feature2",
    },
    {
        type: "input",
        message: "Name another feature of your application.",
        name: "feature3",
    },
    {
        type: "input",
        message: "Name another feature of your application.",
        name: "feature4",
    },
    {
        type: "input",
        message: "Name another feature of your application.",
        name: "feature5",
    },
    {
        type: "input",
        message: "Describe your application's credits.",
        name: "credits",
    },
    {
        type: "list",
        message: "Which license would you like to use?",
        name: "license",
        choices: ["MIT", "Apache License 2.0", "Artistic license 2.0", "GNU General Public License v2.0", "Mozilla Public License 2.0", "None"]
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) throw error;
        console.log("Created successfully")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            writeToFile("README.md", generateMarkdown(response))
        })

}

// Function call to initialize app
init();



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README